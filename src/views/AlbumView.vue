<script>
import TeamCard from '@/components/TeamCard.vue';
import TeamAlbum from '@/components/TeamAlbum.vue';

export default {
  name: 'AlbumView',
  components: { TeamAlbum, TeamCard },
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    teams() {
      return this.$store.getters.teams(this.searchValue);
    },
    activeTeam() {
      const teamName = this.$route.query.team;

      return this.$store.getters.activeTeam(teamName);
    },
  },
  methods: {
    openAlbum(teamName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          team: teamName,
        },
      });
    },
  },
};
</script>

<template>
  <v-container>
    <template v-if="!activeTeam">
      <v-row v-if="!activeTeam" justify="center" align="center">
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
          <team-card :team="team" @openAlbum="openAlbum" />
        </v-col>
      </v-row>
    </template>

    <v-row v-if="activeTeam">
      <v-col cols="12">
        <team-album :team="activeTeam" />
      </v-col>
    </v-row>
  </v-container>
</template>
