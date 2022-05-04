<script>
import source from '@/mixins/source';
import TeamLogo from '@/components/TeamLogo.vue';

export default {
  name: 'TeamAlbum',
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
  <div>
    <v-row>
      <v-col cols="12">
        <team-logo :src="setTeamLogo(team.name)" class="mx-auto" />

        <p>{{ team.name }} - {{ team.slogan }}</p>

        <p>{{ team.description }}</p>
      </v-col>
    </v-row>
  </div>
</template>
