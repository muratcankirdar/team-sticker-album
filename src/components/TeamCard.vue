<script>
import source from '@/mixins/source';
import TeamLogo from '@/components/TeamLogo';

export default {
  name: 'TeamCard',
  components: { TeamLogo },
  mixins: [source],
  props: {
    team: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<template>
  <v-card
    id="team-card"
    class="my-4 overflow-hidden mx-auto"
    width="374" height="260"
    @click="$emit('openAlbum', team.name)"
  >
    <v-card-title>
      <team-logo :src="setTeamLogo(team.name)" class="mx-auto" />
    </v-card-title>

    <v-card-text class="text-center">
      <p>{{ team.name }} - {{ team.slogan }}</p>
      <p>{{ team.description }}</p>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
#team-card {
  .logo-image {
    max-width: 128px;
  }
}
</style>
