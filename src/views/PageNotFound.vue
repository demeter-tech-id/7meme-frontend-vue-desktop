<template>
    <div>
        Halaman
        <code>{{ path }}</code> Tidak Ditemukan
    </div>
</template>

<script>
export default {
    computed: {
        path() {
            return this.$route.path;
        }
    }
};
</script>

<style lang="stylus" scoped></style>
