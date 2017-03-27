<template>
    <div class="registeredUsers">
        <h2>Registered users:</h2>
      <ul>
        <li v-for="user in registeredUsers">
          {{user.name}}, his age is: {{user.age}} <button v-on:click="unRegister(user)">un register</button>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
      registeredUsers(){
          return this.$store.state.registeredUsers;
      }
  },
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
    }
  },
    methods: {
        unRegister(user){
            let thisUser = this.$store.state.users.find(function(user2){
                if(user2.id === user.id){
                    user2.registered = false;
                    return user2;
                };
            });
            this.$store.state.registeredUsers.splice(this.$store.state.registeredUsers.indexOf(thisUser), 1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .registeredUsers h2 {
        color: forestgreen;
    }
</style>
