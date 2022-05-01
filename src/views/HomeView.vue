<script>
export default {
  name: 'HomeView',
};
</script>

<template>
  <v-container id="home" class="mt-16">
    <v-row justify="center" align="center" class="my-16">
      <v-col cols="4" md="2" class="hidden-sm-and-down" />

      <v-col cols="12" sm="12" md="8" class="text-center">
        <img src="@/assets/trendyol-tech-logo.png" alt="Sticker Set Logo" class="company-logo" />
      </v-col>

      <v-col cols="12" md="2" class="text-end">
        <span>Next Page</span>

        <v-icon>mdi-arrow-right</v-icon>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-end">
        Team Sticker Album
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#home {
  border: 1px solid;
  border-radius: 0.5rem;

  .company-logo {
    max-width: 20rem;
  }
}
</style>
