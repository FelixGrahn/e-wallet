<template>
  <div class="TopMainDiv">
    <h1 class="Header">{{ title }}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      /* title: String */
    }
  },
  props: {
    title: String
  }
};
</script>

<style>
.Header {
color: brown;
}

</style>
