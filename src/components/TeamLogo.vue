<script>
export default {
  name: 'TeamLogo',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'Team Logo',
    },
  },
};
</script>

<template>
  <div>
    <slot name="image">
      <img id="team-logo" :src="src" :alt="alt">
    </slot>
  </div>
</template>

<style lang="scss">
#team-logo {
  max-width: 128px;
}
</style>
