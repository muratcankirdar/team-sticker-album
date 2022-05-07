export default {
  teams: (state) => (value = '') => state.teams
    .filter((team) => team.name.toLowerCase().includes(value.toLowerCase())),
  activeTeam: (state) => (name = '') => state.teams.find((team) => team.name === name),
  unCollectedMembers: (state) => {
    const members = state.teams.map((team) => team.members).flat();

    return members.filter((member) => !member.collected);
  },
  unCollectedMembersCount: (state, getters) => getters.unCollectedMembers.length,
  randomStickers: (state, getters) => {
    const stickers = [];
    const generatedRandomIndexes = [];
    let hasNumber = false;

    const maxStickerMember = getters.unCollectedMembersCount < 6
      ? getters.unCollectedMembersCount
      : 6;

    for (let i = 0; i < maxStickerMember; i += 1) {
      do {
        const randomIndex = Math.floor(Math.random() * getters.unCollectedMembersCount);
        hasNumber = generatedRandomIndexes.includes(randomIndex);

        if (!hasNumber) {
          generatedRandomIndexes.push(randomIndex);
          stickers.push(getters.unCollectedMembers[randomIndex]);
        }
      }
      while (hasNumber);
    }

    return stickers;
  },
};
