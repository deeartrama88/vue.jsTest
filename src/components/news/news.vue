<template>
    <div class="news">
        <h1>News</h1>
        <UsersList />
    </div>
</template>

<script>
    import UsersList from '../usersList/UsersList'
    export default {
        name: 'news',
        data () {
            return {

            }
        },
        components: {
          UsersList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
