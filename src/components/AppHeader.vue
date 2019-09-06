<template>
    <b-navbar class="set-color-theme" type="dark" toggleable="lg" fixed="top">
        <b-navbar-brand href="#/home" class="apply-margin-left">
            <img src="../assets/logo.png" :alt="title" width="80px" height="25px" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :href="href.home" :active="href.home == path">
                    <fa icon="home"></fa>&#160;Beranda
                </b-nav-item>
                <b-nav-item :href="href.popular" :active="href.popular == path">
                    <fa icon="star"></fa>&#160;Populer
                </b-nav-item>
                <b-nav-item :href="href.topic" :active="href.topic == path">
                    <fa icon="globe"></fa>&#160;Topik
                </b-nav-item>
                <b-nav-item :href="href.event" :active="href.event == path">
                    <fa icon="calendar-check"></fa>&#160;Event
                    <b-badge variant="danger" v-html="eventsCount" pill></b-badge>
                </b-nav-item>
                <b-nav-item :href="href.search" :active="href.search == path">
                    <fa icon="search"></fa>&#160;Cari
                </b-nav-item>
                <b-nav-item :href="href.upload" :active="href.upload == path">
                    <fa icon="upload"></fa>&#160;Unggah
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown variant="dark" v-if="isLoggedIn" right no-caret>
                    <template slot="button-content">
                        <fa icon="user-circle"></fa>&#160;
                        <span v-html="username"></span>
                    </template>
                    <b-dropdown-item href="#/profile">Profil</b-dropdown-item>
                    <b-dropdown-item href="#/notification">Notifikasi</b-dropdown-item>
                    <b-dropdown-item href="#/settings">Setelan</b-dropdown-item>
                    <b-dropdown-item href="#" @click="logout">Keluar</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item :href="href.login" :active="href.login == path" v-else>
                    <fa icon="sign-in-alt"></fa>&#160;Masuk
                </b-nav-item>
                <b-nav-item
                    :href="href.createAccount"
                    :active="href.createAccount == path"
                    v-if="!isLoggedIn"
                >
                    <fa icon="user-plus"></fa>&#160;Daftar
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        path() {
            return "#" + this.$route.path;
        },

        eventsCount() {
            return 2;
        },

        notificationCount() {
            return 1;
        }
    },
    data() {
        return {
            href: {
                home: "#/",
                popular: "#/popular",
                topic: "#/topic",
                event: "#/event",
                search: "#/search",
                upload: "#/upload",
                login: "#/login",
                createAccount: "#/create-account"
            },
            isLoggedIn: this.globals.hasSession(),
            username: this.globals.getSession().username
        };
    },
    methods: {
        logout() {
            let ok = confirm("Anda yakin ingin keluar ?");
            if (ok) {
                let uuid = this.globals.getSession().uuid;
                this.restful
                    .logout(uuid)
                    .then(() => {
                        this.isLoggedIn = false;
                        this.globals.clearSession();
                        this.eventBus.$emit("logout");
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        }
    },
    inject: ["eventBus", "globals", "restful"],
    created() {
        this.eventBus.$on("login:success", username => {
            this.isLoggedIn = true;
            this.username = username;
        });
    }
};
</script>

<style lang="stylus" scoped>
.truncate {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.set-color-theme {
    background-color: #46484a;
}
</style>
