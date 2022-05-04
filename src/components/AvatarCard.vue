<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';

export default {
  name: 'AvatarCard',
  props: {
    member: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    avatar() {
      const options = { seed: this.member.name };
      return createAvatar(style, options);
    },
    worksUntilYear() {
      const currentYear = new Date().getFullYear();

      return currentYear - this.member.worksUntil;
    },
    worksUntilText() {
      return this.worksUntilYear > 0 ? `${this.worksUntilYear}+ years` : 'Newbie';
    },
  },
};
</script>

<template>
  <v-card id="avatar-card" height="260" class="text-center">
    <v-card-title class="text-center">
      <div v-if="member.collected" v-html="avatar" class="mx-auto avatar-wrapper" />

      <img
        v-else
        src="@/assets/avatar-placeholder.png"
        class="mx-auto avatar-placeholder"
        alt="Avatar Placeholder"
      >
    </v-card-title>

    <v-card-text>
      <p>{{ member.name }}</p>
      <p v-if="member.role">{{ member.role }}</p>
      <p>{{ worksUntilText }}</p>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
#avatar-card {
  .avatar-wrapper {
    width: 6em;
    height: 5em;
  }

  .avatar-placeholder {
    width: 5em;
    height: 6em;
  }
}
</style>
