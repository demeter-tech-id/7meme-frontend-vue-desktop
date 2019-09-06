<template>
    <div id="app-sidebar-left">
        <b-list-group>
            <b-list-group-item v-for="creator in creatorPopuler" v-bind:key="creator.index" button>
                <b-container style="padding: 0px">
                    <b-row align-v="center">
                        <b-col cols="2">
                            <b-img
                                blank="true"
                                blank-color="#777"
                                rounded="circle"
                                src="../assets/logo.png"
                                width="40px"
                                height="40px"
                            />
                        </b-col>
                        <b-col cols="10">
                            <b-container>
                                <b-row>
                                    <b-col class="creator-name">
                                        <span>{{ creator.name }}</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-badge variant="info">1.245</b-badge>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            creatorPopuler: [
                {
                    index: 1,
                    name: "muhammad_safar"
                },
                {
                    index: 2,
                    name: "riff1231"
                },
                {
                    index: 3,
                    name: "muhammad_safar"
                },
                {
                    index: 4,
                    name: "riff1231"
                },
                {
                    index: 5,
                    name: "muhammad_safar"
                }
            ]
        };
    }
};
</script>

<style lang="stylus" scoped>
.creator-name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
