<script>
import source from '@/mixins/main';
import TeamLogo from '@/components/TeamLogo.vue';
import AvatarCard from '@/components/AvatarCard.vue';

export default {
  name: 'TeamAlbum',
  components: { TeamLogo, AvatarCard },
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
  <div id="team-album">
    <v-row class="my-2" align="center">
      <v-col cols="12" sm="3" md="2" lg="2">
        <team-logo :src="setTeamLogo(team.name)" />
      </v-col>

      <v-col cols="12" sm="9" md="10" lg="10">
        <span>{{ team.name }} - {{ team.slogan }}</span>
        <p class="hidden-xs-only">{{ team.description }}</p>
      </v-col>

      <v-col cols="12" class="hidden-sm-and-up">
        <span>{{ team.description }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="member in team.members"
        :key="member.name"
        cols="12" sm="6" md="4" lg="3" xl="2"
      >
        <avatar-card :key="member.name" :member="member" />
      </v-col>
    </v-row>
  </div>
</template>
