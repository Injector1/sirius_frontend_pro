<template>
    <div class="tasks-done"><h1><span class="completed-tasks-text">Completed tasks:</span> {{ tasksDone }}</h1></div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "TasksCounter",
        computed: mapGetters(["tasksDone"])
    }
</script>

<style scoped lang="scss">
    .tasks-done {
        position: fixed;
        display: block;
        z-index: 228;
        text-align: center;
        padding: 2vh 2vh 2vh 2vh;
        right: 0;
        border-radius: 13px 0px 0px 13px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
        width: auto;
        top: 100px;
        background-color: $standart-color;

        h1 {
            margin: 0;
            text-align: center;
            font-family: $font-family-base;
            font-size: $font-size-mini-headers;
            font-weight: $font-weight-base;
        }
    }

    @media screen and (max-width: 700px){
        .completed-tasks-text  {
            display: none;
        }
    }
</style>