<template>
    <div class="container tasks-container">
        <tasks-counter/>
        <h1 class="title">Tasks</h1>
        <div class="row">
            <task-card class="col-lg-3" v-for="task in allTasks"
                       v-bind:id="task.id"
                       v-bind:task-header="task.title"
                       v-bind:task-created="'12.11.2020'"
                       v-bind:is-done="task.completed"
                       v-bind:key="task.id"

            />
            <task-create-card class="col-lg-3"/>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import TaskCard from "../components/TaskCard";
    import TaskCreateCard from "../components/TaskCreateCard";
    import TasksCounter from "../components/TasksCounter";

    export default {
        name: "Tasks",
        components: {TasksCounter, TaskCreateCard, TaskCard},
        data() {
            return {}
        },
        computed: mapGetters(["allTasks"]),
        methods: {
            ...mapActions(["fetchTasks"])
        },
        async mounted() {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAA")
            this.fetchTasks(20)
        }

    }
</script>

<style scoped lang="scss">
    h1 {
        font-family: $font-family-base;
        font-weight: $font-weight-base;
        font-size: $font-size-header;
        text-align: center;
    }

    .row {
        align-content: space-between;
        justify-content: center;
    }

    .tasks-container {
        padding-top: 1%;
    }

    @media screen and (max-width: 400px){
        .title {
            font-size: $font-size-header - 10px;
        }
    }
</style>
