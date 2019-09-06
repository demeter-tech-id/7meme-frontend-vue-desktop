<template>
    <div id="app">
        <app-header id="app-header"></app-header>
        <div id="app-body">
            <app-sidebar-left id="app-sidebar-left" v-if="!isMobile" />
            <div id="app-content">
                <router-view />
            </div>
            <app-sidebar-right id="app-sidebar-right" v-if="!isMobile" />
        </div>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebarLeft from "@/components/AppSidebarLeft.vue";
import AppSidebarRight from "@/components/AppSidebarRight.vue";

export default {
    data() {
        return {
            isMobile: this.$isMobile()
        };
    },
    components: {
        AppHeader,
        AppSidebarLeft,
        AppSidebarRight
    },
    created() {}
};
</script>

<style lang="stylus">
#app {
    width: 100%;
    margin: 0px;
    top: 0px;
    bottom: 0px;
    position: fixed;
    overflow-y: scroll;
    overflow: -moz-scrollbars-none; // Hide scrollbar in Firefox
    -ms-overflow-style: none; // Hide scrollbar in Internet Explorer +10
}

#app::-webkit-scrollbar {
    width: 0 !important;
}

#app-header {
    padding-left: 10px;
    padding-right: 10px;
}

#app-body {
    margin: 0px;
}

#app-sidebar-left {
    display: none;
    margin: 0px;
}

#app-content {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0px;
}

#app-sidebar-right {
    display: none;
    margin: 0px;
}

@media only screen and (min-width: 1050px) {
    #app-header {
        padding-left: 40px;
        padding-right: 40px;
    }

    #app-sidebar-left {
        display: block;
        position: fixed;
        top: 120px;
        left: 20px;
        width: 220px;
    }

    #app-sidebar-right {
        display: block;
        position: fixed;
        top: 120px;
        right: 20px;
        width: 220px;
    }
}

@media only screen and (min-width: 1200px) {
    #app-header {
        padding-left: 80px;
        padding-right: 80px;
    }

    #app-sidebar-left {
        left: 80px;
        width: 250px;
    }

    #app-sidebar-right {
        right: 80px;
        width: 250px;
    }
}
</style>
