<script>
import AvatarCard from '@/components/AvatarCard.vue';

export default {
  name: 'StickerDialog',
  components: { AvatarCard },
  data: () => ({
    dialog: true,
    setOpened: false,
  }),
  computed: {
    dailyStickerSetCount() {
      return this.$store.state.dailyStickerSetCount;
    },
    randomStickers() {
      return this.$store.getters.randomStickers;
    },
    subtitle() {
      let message = 'Come back tomorrow for more stickers!';

      if (this.dailyStickerSetCount > 0) {
        message = `You have ${this.dailyStickerSetCount} sticker sets to open!`;
      }

      return message;
    },
  },
  methods: {
    closeDialog() {
      this.$store.commit('setStickerDialogVisibility');
    },
    toggleSet() {
      this.setOpened = !this.setOpened;
    },
    pasteToAlbum() {
      this.$store.dispatch('openSet', this.randomStickers);
      this.toggleSet();
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" max-width="960" @keydown="closeDialog" @click:outside="closeDialog">
    <v-card>
      <v-card-title>
        <span class="mx-auto">Team Sticker Album</span>
      </v-card-title>

      <v-card-subtitle v-if="!setOpened" class="text-center">
        <span class="text-h5">
          {{ subtitle }}
        </span>
      </v-card-subtitle>

      <v-card-text>
        <template v-if="!setOpened">
          <v-row justify="space-around">
            <v-col
              v-for="set in dailyStickerSetCount"
              :key="set"
              cols="12" sm="6" md="4"
              class="text-center"
            >
              <div class="sticker-set-container my-2">
                <img
                  src="../assets/trendyol-tech-logo.png"
                  alt="Trendyol tech logo"
                  class="sticker-set-container__image"
                >
                <p class="text-h5 text--primary">Sticker Set</p>
              </div>

              <v-btn  :key="set.name" outlined block @click="toggleSet">
                Open
              </v-btn>
            </v-col>
          </v-row>
        </template>

        <template v-else>
          <v-row class="pa-4" justify="center">
            <v-col v-for="member in randomStickers" :key="member.name" cols="12" md="2">
              <avatar-card
                :key="member.name" :member="member"
                class="animate__animated animate__flipInX"
                show-avatar
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="text-center">
              <v-btn depressed color="primary" @click="pasteToAlbum">Paste to your album</v-btn>
            </v-col>
          </v-row>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.sticker-set-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid;
  border-radius: 4px;
  height: 12rem;

  &__image {
    max-width: 60%;
  }
}
</style>
