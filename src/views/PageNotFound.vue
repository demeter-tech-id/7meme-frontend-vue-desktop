<template>
  <div>
    Halaman
    <code>{{ path }}</code> Tidak Ditemukan
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: this.$route.path
    };
  }
};
</script>

<style lang="stylus" scoped></style>
