<script>
import StickerDialog from '@/components/StickerDialog.vue';
import main from '@/mixins/main';

export default {
  name: 'App',
  components: { StickerDialog },
  mixins: [main],
  created() {
    this.syncTeams();
    this.syncDailyStickerSetCount(this.$store.getters.unCollectedMembersCount);
  },
  computed: {
    isStickerDialogVisible() {
      return this.$store.state.isStickerDialogVisible;
    },
  },
  methods: {
    syncTeams() {
      this.$store.commit('syncTeams');
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
