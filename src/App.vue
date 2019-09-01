<template>
    <div id="app">
        <app-header></app-header>
        <b-container>
            <b-row align-h="center">
                <b-col col lg="3">
                    <app-sidebar-left />
                </b-col>
                <b-col cols="6" md="6">
                    <router-view />
                </b-col>
                <b-col col lg="3">
                    <app-sidebar-right />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebarLeft from "@/components/AppSidebarLeft.vue";
import AppSidebarRight from "@/components/AppSidebarRight.vue";

export default {
    components: {
        AppHeader,
        AppSidebarLeft,
        AppSidebarRight
    }
};
</script>

<style lang="stylus"></style>
