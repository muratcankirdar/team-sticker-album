<script>
import TeamCard from '@/components/TeamCard.vue';

export default {
  name: 'AlbumView',
  components: { TeamCard },
  computed: {
    teams() {
      return this.$store.getters.teams;
    },
  },
};
</script>

<template>
  <div>
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
  </div>
</template>
