<script>
export default {
  name: 'HomeView',
  computed: {
    wrapperClasses() {
      let classes = 'mt-16 pa-4';

      if (this.$vuetify.breakpoint.smAndDown) {
        classes += ' mx-2';
      } else {
        classes += ' mx-auto';
      }

      return classes;
    },
    albumTitleClasses() {
      let classes = 'text-h5';

      if (this.$vuetify.breakpoint.smAndDown) {
        classes += ' text-center';
      } else {
        classes += ' text-end';
      }

      return classes;
    },
  },
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
  <div id="home" :class="wrapperClasses">
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
      <v-spacer />

      <v-col cols="12" md="4" class="text-center">
        <v-btn outlined @click="openStickerDialog">
          Get your daily stickers
        </v-btn>
      </v-col>

      <v-col cols="12" md="4" :class="albumTitleClasses">
        Team Sticker Album
      </v-col>
    </v-row>
  </div>
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
