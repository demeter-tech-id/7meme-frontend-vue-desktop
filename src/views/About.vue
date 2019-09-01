<template>
    <div>
        <div v-for="author in authors" :key="author.name">{{ author.name }} as {{ author.as }}</div>
    </div>
</template>

<script>
export default {
    inject: ["appInfo"],
    data() {
        return {
            authors: this.appInfo.authors
        };
    }
};
</script>

<style lang="stylus" scoped></style>
