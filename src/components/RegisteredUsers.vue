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
  props: ['registeredUsers'],
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
    }
  },
    methods: {
        unRegister(user){
            this.$emit('unRegister', user);
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
