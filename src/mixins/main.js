export default {
  methods: {
    setTeamLogo(teamName) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`../assets/${teamName.toLowerCase()}.png`);
    },
    syncDailyStickerSetCount() {
      if (localStorage.lastOnlineDay === new Date().toDateString()) {
        this.$store.commit('setDailyStickerSetCount', Number(localStorage.stickerSetCount));
      } else {
        if (!localStorage.lastOnlineDay) {
          localStorage.setItem('lastOnlineDay', new Date().toDateString());
        }

        const count = Math.ceil(this.$store.getters.unCollectedMembersCount / 6);

        if (count >= 3) {
          this.$store.commit('setDailyStickerSetCount', 3);
          localStorage.setItem('stickerSetCount', '3');
        } else {
          this.$store.commit('setDailyStickerSetCount', count);
          localStorage.setItem('stickerSetCount', count.toString());
        }
      }
    },
  },
};
