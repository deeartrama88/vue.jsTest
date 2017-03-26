<template>
    <div class="users">
        <h2>All users:</h2>
        <ul>
            <li v-for="user in users" v-show="!user.registered">
                {{user.name}}, his age is: {{user.age}}
                <button v-on:click="register(user)">register</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'allUsers',
        props: ['users'],
        data () {
            return {

            }
        },
        methods: {
            register(user){
                this.$emit('register', user);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .users h2 {
        color: dodgerblue;
    }
</style>
