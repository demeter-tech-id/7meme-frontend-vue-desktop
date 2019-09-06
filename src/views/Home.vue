<template>
    <div id="home" class="posts">
        <post
            class="post"
            v-for="post in posts"
            :key="post._id"
            :author-name="post.author"
            :content-title="post.title"
            :content-img-src="post.image_url"
        />
    </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
    components: {
        Post
    },
    data() {
        return {
            posts: []
        };
    },
    inject: ["restful", "globals"],
    created() {
        window.document.title = `${this.globals.getAppName()} - Beranda`;
        this.restful
            .getPosts(0, 5)
            .then(posts => {
                this.posts = this.posts.concat(posts);
            })
            .catch(err => {
                console.error(err);
            });
    }
};
</script>

<style lang="stylus" scoped>
.post {
    margin-bottom: 50px;
}
</style>
