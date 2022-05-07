export default {
  openSet({ commit }, randomMembers) {
    commit('openSet', randomMembers);
    commit('decreaseDailyStickerSetCount');
  },
};
