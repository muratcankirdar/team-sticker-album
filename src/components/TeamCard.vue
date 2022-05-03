<script>
export default {
  name: 'TeamCard',
  props: {
    team: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    image() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`../assets/${this.team.name.toLowerCase()}.png`);
    },
  },
};
</script>

<template>
  <v-card id="team-card" class="my-12 overflow-hidden mx-auto" width="374" height="260">
    <v-card-title>
      <img :src="image" alt="Team Logo" class="mx-auto logo-image" />
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
