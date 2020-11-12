<template>
    <div class="container form-container">
        <h1>Welcome to a todo app</h1>

        <form>
            <label for="emailField">Email</label>
            <br/>
            <input id="emailField" name="email" type="email" placeholder="Enter email..."/>
            <br/>
            <label for="passwordField">Password</label>
            <br/>
            <input id="passwordField" name="password" type="password" placeholder="Enter password..."/>
            <br/>
            <button type="submit" @click="goToTaskManager" class="submit-button">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        methods: {
            goToTaskManager() {
                this.$router.push("/tasks")
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        font-family: $font-family-base;
        font-weight: $font-weight-base;
    }

    .form-container {
        padding: 10%;
        text-align: center;

        h1 {
            font-size: $font-size-header;
            margin-bottom: 10vh;
        }
        form {
            label {
                text-align: left;
                font-size: $font-size-mini-headers;
            }
            input {
                padding: 4%;
                margin-bottom: 2%;
                width: 50vh;
                border: none;
                border-radius: 15px;
                box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
                outline: none;
            }
            button {
                outline: none;
                padding: 3%;
                width: 50vh;
                margin-top: 10vh;
                border: none;
                border-radius: 15px;
                box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
                background-color: $standart-color;
            }
        }
    }
    @media screen and (max-width: 700px) {
        .form-container {
            padding: 1%;

            h1 {
                margin-top: 2%;
            }
        }
    }
</style>