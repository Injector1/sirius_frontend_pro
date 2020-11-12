<template>
    <div class="container no-padding">
        <div class="row no-gutters no-padding no-margin">
            <div class="col no-padding">
                <LoginForm/>
            </div>
            <div class="col imageCol no-padding">
                <img src="../assets/img/loginPageImage.png" width="100%" height="100%"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from "../components/LoginForm";

    export default {
        name: "Login",
        components: {LoginForm}
    }
</script>

<style scoped lang="scss">
    @media screen and (max-width: 1000px) {
        .imageCol {
            display: none;
        }
    }

    .no-margin {
        margin-left: 0 !important;
        margin-right: 0 !important;

    }

    .no-padding {
        padding: 0;
        height: 100vh;
        width: 100%;
        max-width: none
    }
</style>