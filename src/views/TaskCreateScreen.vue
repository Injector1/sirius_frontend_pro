<template>
    <div class="container task-create-container">
        <img src="../assets/img/closeButton.png" @click="$router.push('/tasks')" width="60px" height="60px"/>
        <h1 class="title">New task</h1>
        <task-create-form/>
    </div>
</template>

<script>
    import TaskCreateForm from "../components/TaskCreateForm";
    export default {
        name: "TaskCreateScreen",
        components: {TaskCreateForm}
    }
</script>

<style scoped lang="scss">
    img {
        cursor: pointer;
        position: fixed;
        margin-left: 110px;

    }
    .task-create-container {
        text-align: center;
        top: 50%;
        left: 50%;
        position: absolute;

        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 400px){
        .title {
            font-size: $font-size-header - 10px;
        }
    }
</style>
