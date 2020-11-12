<template>
    <div class="container task-card">
        <div class="content">
            <h1 v-text="taskHeader"></h1>
            <p v-text="taskCreated"></p>
        </div>
        <button @click="changeTaskStatus(id)" v-bind:class="{ 'done': isDone, 'active': !isDone}">
            <p v-if="isDone">Done!</p>
            <p v-else>Complete</p>
        </button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "TaskCard",
        props: ["id", "taskHeader", "taskCreated", "isDone"],

        methods: mapMutations(["changeTaskStatus"])

    }
</script>

<style scoped lang="scss">
    * {
        font-family: $font-family-base;
        font-weight: $font-weight-base;
    }

    .task-card {
        padding: 2%;
        margin: 1%;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
        outline: none;

        .content {
            min-height: 130px;
            overflow: hidden;
        }
        h1 {
            font-size: $font-size-mini-headers;
            font-weight: $font-weight-base;
        }

        p {
            color: rgba(196, 196, 196, 1);
            font-size: $font-size-card-text;
            font-weight: $font-weight-base;
            margin: 0;
        }

        button {
            position: relative;
            width: 100%;
            padding: 2%;
            min-height: 50px;
            background-color: #FFFFFF;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
            outline: none;
            border: none;

            p {
                padding: 0;
                margin: 0;
            }
        }

        .done {
            box-shadow: 0px 2px 15px rgba(195, 254, 218, 1);

            p {
                color: #15900e;
            }
        }
    }


    @media screen and (max-width: 600px){
        .task-card {
            margin: 1% 2% 1% 2%;
        }

    }
</style>