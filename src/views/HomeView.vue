<script>
export default {
  name: 'HomeView',
  methods: {
    openAlbum() {
      this.$router.push('album');
    },
    openStickerDialog() {
      this.$store.commit('setStickerDialogVisibility', true);
    },
  },
};
</script>

<template>
  <v-container id="home" class="mt-16">
    <v-row justify="center" align="center" class="my-16">
      <v-col cols="4" md="2" class="hidden-sm-and-down"/>

      <v-col cols="10" md="8" class="text-center">
        <img src="@/assets/trendyol-tech-logo.png" alt="Sticker Set Logo" class="company-logo"/>
      </v-col>

      <v-col
        cols="12" md="2"
        class="text-end animate__animated animate__headShake animate__infinite"
      >
        <v-btn text depressed class="text-capitalize" @click="openAlbum">
          Next Page
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-end text-h5">
        Team Sticker Album
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-end">
        <v-btn outlined @click="openStickerDialog">
          Get your daily stickers
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#home {
  border: 1px solid;
  border-radius: 0.5rem;
  max-width: 960px;

  .company-logo {
    width: 100%;
    max-width: 20rem;
  }
}
</style>
