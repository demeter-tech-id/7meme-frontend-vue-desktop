<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-input id="username" type="text" placeholder="Nama Pengguna" v-model="username"></b-form-input>
            <b-form-input id="password" type="password" placeholder="Kata Sandi" v-model="password"></b-form-input>
            <b-button @click="onSubmit" variant="primary">Masuk</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    inject: ["eventBus", "restful", "globals"],
    methods: {
        onSubmit() {
            this.restful
                .login(this.username, this.password)
                .then(session => {
                    const { username, uuid } = session;
                    this.globals.setSession(username, uuid);
                    this.eventBus.$emit("login:success", username);
                    this.$router.push({ path: "/" });
                })
                .catch(console.error);
        }
    },
    created() {
        window.document.title = `${this.globals.getAppName()} - Masuk`;
    }
};
</script>

<style lang="stylus" scoped></style>