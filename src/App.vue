<script>
import StickerDialog from '@/components/StickerDialog.vue';

export default {
  name: 'App',
  components: { StickerDialog },
  created() {
    this.syncTeams();
    this.syncDailyStickerSetCount(this.$store.getters.unCollectedMembersCount);
  },
  computed: {
    isStickerDialogVisible() {
      return this.$store.state.isStickerDialogVisible;
    },
  },
  methods: {
    syncTeams() {
      this.$store.commit('syncTeams');
    },
    syncDailyStickerSetCount(unCollectedMembersCount) {
      this.$store.commit('setDailyStickerSetCount', unCollectedMembersCount);
    },
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

    <sticker-dialog v-if="isStickerDialogVisible" />
  </v-app>
</template>

<style lang="scss">
.v-application--wrap {
  background: whitesmoke;
}
</style>
