<script>
import TeamCard from '@/components/TeamCard.vue';

export default {
  name: 'AlbumView',
  components: { TeamCard },
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    teams() {
      return this.$store.getters.teams(this.searchValue);
    },
  },
};
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="8" sm="6" md="4" class="mx-auto mt-4">
        <v-text-field v-model="searchValue" label="Search Team" dense outlined />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col
        v-for="team in teams"
        :key="team.name"
        cols="12" md="6" xl="3"
        align-self="center"
        class="mx-auto"
      >
        <team-card :team="team" />
      </v-col>
    </v-row>
  </v-container>
</template>
