<template>
    <div class="allUsersList">
        <h1>{{ msg }}</h1>
        <AllUsers></AllUsers>
        <RegisteredUsers></RegisteredUsers>
    </div>
</template>

<script>
    import AllUsers from '../components/AllUsers'
    import RegisteredUsers from '../components/RegisteredUsers'

    export default {
        name: 'AllUsersList',
        data () {
            return {
                msg: 'All Users list: ',
            }
        },
        components: {
            AllUsers,
            RegisteredUsers
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
