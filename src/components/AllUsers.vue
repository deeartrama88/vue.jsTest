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
        computed: {
            users(){
                return this.$store.state.users;
            }
        },
        methods: {
            register(user){
                let thisUser = this.$store.state.users.find(function(user2){
                    if(user2.id === user.id){
                        user2.registered = true;
                        return user2;
                    };
                });
                this.$store.state.registeredUsers.push(thisUser);
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
