<template>
    <div>
        <div id="title" v-html="contentTitle" />
        <img id="content" :src="contentImgSrc" width="520" height="400" />
    </div>
</template>

<script>
export default {
    props: [
        "authorImgSrc",
        "authorName",
        "contentImgSrc",
        "contentTitle",
        "contentDate",
        "commentCount"
    ]
};
</script>

<style lang="stylus" scoped>
#title {
    font-size: 18pt;
}

#content {
    border-radius: 5px;
}
</style>