<template>
    <div class="container task-create-card" @click="$router.push('/create')">
        <img src="../assets/img/plus.png"/>
        <h1>Create new task</h1>
    </div>
</template>

<script>
    export default {
        name: "TaskCreateCard"
    }
</script>

<style scoped lang="scss">
    * {
        font-family: $font-family-base;
        font-weight: $font-weight-base;
    }

    .task-create-card {
        background-color: #F7F7F7;
        padding: 4%;
        margin: 1%;
        border: none;
        border-radius: 15px;
        outline: none;
        text-align: center;
        cursor: pointer;

        h1 {
            font-size: 18px;
            font-weight: $font-weight-base;
        }

        img {
            text-align: center;
            margin: 10%;
        }

    }
</style>