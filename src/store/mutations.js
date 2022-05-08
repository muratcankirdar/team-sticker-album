export default {
  setStickerDialogVisibility(state, value = false) {
    state.isStickerDialogVisible = value;
  },
  decreaseDailyStickerSetCount(state) {
    if (state.dailyStickerSetCount > 0) {
      state.dailyStickerSetCount -= 1;
      localStorage.setItem('stickerSetCount', state.dailyStickerSetCount.toString());
    }
  },
  openSet(state, randomMembers) {
    let teams = [...state.teams];

    randomMembers.forEach((randomMember) => {
      teams = teams.map((team) => ({
        ...team,
        members: team.members.map((member) => {
          if (randomMember.name === member.name) return { ...member, collected: true };

          return member;
        }),
      }));
    });

    state.teams = teams;
    localStorage.setItem('teams', JSON.stringify(teams));
  },
  syncTeams(state) {
    if (localStorage.teams) {
      state.teams = JSON.parse(localStorage.teams);
    }
  },
  setDailyStickerSetCount(state, value) {
    state.dailyStickerSetCount = value;
  },
};
