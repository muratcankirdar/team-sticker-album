export default {
  methods: {
    setTeamLogo(teamName) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`../assets/${teamName.toLowerCase()}.png`);
    },
  },
};
