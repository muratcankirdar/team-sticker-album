<script>
export default {
  name: 'StickerDialog',
  data: () => ({
    dialog: true,
  }),
  methods: {
    closeDialog() {
      this.$store.commit('setStickerDialogVisibility');
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" persistent max-width="960">
    <v-card>
      <v-card-title>
        Hello Title
      </v-card-title>

      <v-card-text>
        Hello Text
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn text color="red" class="text-capitalize" @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
