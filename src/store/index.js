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
            name: 'Ayten Öncel',
            role: 'Team Lead',
            worksUntil: 2019,
          },
          {
            name: 'Nur Sengül',
            role: 'Product Owner',
            worksUntil: 2019,
          },
          {
            name: 'Murat Can',
            worksUntil: 2022,
            avatarDisplayed: false,
          },
          {
            name: 'Tevfik Akburç',
            worksUntil: 2021,
          },
          {
            name: 'Uğur Bilgili',
            worksUntil: 2020,
          },
          {
            name: 'Asuman Koçak',
            worksUntil: 2019,
          },
          {
            name: 'Tevfik Demirci',
            worksUntil: 2019,
          },
          {
            name: 'Selim Önder',
            worksUntil: 2019,
          },
        ],
      },
      {
        name: 'Backend',
        slogan: '404 Slogan not found.',
        description: 'If data load slow, we lose customers, or maybe not.',
        members: [
          {
            name: 'Demir Avni',
            role: 'Team Lead',
            worksUntil: 2018,
          },
          {
            name: 'Yağmur Bayar',
            role: 'Product Owner',
            worksUntil: 2019,
          },
          {
            name: 'Duygu Sarper',
            worksUntil: 2020,
          },
          {
            name: 'Tuncay Lemi',
            worksUntil: 2021,
          },
          {
            name: 'Serpil Necmi',
            worksUntil: 2021,
          },
          {
            name: 'Yonca Poyraz',
            worksUntil: 2020,
          },
        ],
      },
      {
        name: 'Mobile',
        slogan: 'We use phones horizontal mode.',
        description: 'We will test release in 92342 android phones',
        members: [
          {
            name: 'Sultan Boz',
            role: 'Team Lead',
            worksUntil: 2017,
          },
          {
            name: 'Belgin Gün',
            role: 'Product Owner',
            worksUntil: 2017,
          },
          {
            name: 'Elvan Adıvar',
            worksUntil: 2017,
          },
          {
            name: 'Soner Demirtaş',
            worksUntil: 2019,
          },
          {
            name: 'Melek Kobal',
            worksUntil: 2020,
          },
          {
            name: 'Ahu Soylu',
            worksUntil: 2021,
          },
        ],
      },
      {
        name: 'Devops',
        slogan: 'Click here to deploy.',
        description: 'Some joke about devops',
        members: [
          {
            name: 'Niyazi Küçük',
            worksUntil: 2018,
          },
          {
            name: 'İskender Babacan',
            worksUntil: 2019,
          },
          {
            name: 'Eser Ali',
            worksUntil: 2019,
          },
          {
            name: 'Feyyaz Yiğit',
            worksUntil: 2020,
          },
          {
            name: 'Lale Bucak',
            worksUntil: 2020,
          },
          {
            name: 'Gülistan Oğuz',
            worksUntil: 2021,
          },
        ],
      },
    ],
  },
  getters: {
    teams: (state) => (value = '') => state.teams
      .filter((team) => team.name.toLowerCase().includes(value.toLowerCase())),
    activeTeam: (state) => (name = '') => state.teams.find((team) => team.name === name),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
