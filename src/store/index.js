import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Frontend',
        slogan: 'Make the web great again!',
        description: 'We are frontend team and we show what you see on the screen.',
        members: [
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
        ],
      },
      {
        name: 'Backend',
        slogan: '404 Slogan not found.',
        description: 'If data load slow, we lose customers, or maybe not.',
        members: [
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
        ],
      },
      {
        name: 'Mobile',
        slogan: 'We use phones horizontal mode.',
        description: 'We will test release in 92342 android phones',
        members: [
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
        ],
      },
      {
        name: 'Devops',
        slogan: 'Click here to deploy.',
        description: 'Some joke about devops',
        members: [
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
          {
            name: '',
            worksUntil: 0,
          },
        ],
      },
    ],
  },
  getters: {
    teams: (state) => state.teams,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
