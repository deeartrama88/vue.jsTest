<template>
    <div class="users">
        <h2>All users:</h2>
        <ul>
            <li v-for="user in users">
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
                this.$emit('deleteUser', user);
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
