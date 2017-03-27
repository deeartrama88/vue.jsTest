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
    import {mapGetters} from 'vuex';
    export default {
        name: 'allUsers',
        computed: {
            ...mapGetters({
                users: "allUsers",
            })
        },
        methods: {
            register(user){
                this.$store.commit({
                    type: "register",
                    userId: user.id
                })
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
