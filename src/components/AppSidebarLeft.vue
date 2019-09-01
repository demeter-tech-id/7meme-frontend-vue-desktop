<template>
    <div id="app-sidebar-left">
        <h4 style="margin-top:20px">
            <b>TOP CREATOR</b>
        </h4>
        <b-list-group>
            <b-list-group-item v-for="creator in creatorPopuler" v-bind:key="creator.name" button>
                <b-container style="padding: 0px">
                    <b-row align-v="center">
                        <b-col cols="1">
                            <strong>{{ creator.index }}</strong>
                        </b-col>
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
                        <b-col cols="8">
                            <b-container>
                                <b-row>
                                    <b-col>
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

<style lang="stylus" scoped></style>
