<script>
import StickerDialog from '@/components/StickerDialog.vue';

export default {
  name: 'App',
  components: { StickerDialog },
  computed: {
    isStickerDialogVisible() {
      return this.$store.state.isStickerDialogVisible;
    },
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

    <sticker-dialog v-if="isStickerDialogVisible" />
  </v-app>
</template>

<style lang="scss">
.v-application--wrap {
  background: whitesmoke;
}
</style>
