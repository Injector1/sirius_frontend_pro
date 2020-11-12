<template>
    <div class="container">
        <h1>Task Name</h1>
        <form @submit.prevent="submit">
            <textarea placeholder="Enter task name..." v-model.lazy.trim="title"/>
            <br/>
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "TaskCreateForm",
        computed: mapGetters(["tasksNumber", "allTasks"]),
        data() {
            return {
                title: "",
            }
        },
        methods: {
            ...mapMutations(["createTask"]),
            submit() {
                this.createTask({
                    id: this.allTasks.length + 1,
                    title: this.title,
                    createdAt: Date.now().toString(),
                    userId: 0,
                    completed: false
                })
                console.log(this.allTasks)
            }
        }
    }
</script>

<style scoped lang="scss">
    $standart-width: 50vh;
    .container {
        h1 {
            font-size: $font-size-mini-headers;
            font-weight: $font-weight-base;
        }
        form {
            textarea {
                max-lines: 10;
                min-height: 100px;
                resize: none;
                border: none;
                box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
                padding: 2%;
                border-radius: 5%;
                outline: none;
                width: $standart-width;
            }
            button {
                min-height: 50px;
                margin-top: 10vh;
                outline: none;
                border: none;
                width: $standart-width;
                padding: 1%;
                border-radius: 15px;
                background-color: $standart-color;
                font-size: $font-size-mini-headers;
                font-weight: $font-weight-base;
            }
        }
    }
</style>