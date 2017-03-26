<template>
    <div class="allUsersList">
        <h1>{{ msg }}</h1>
        <AllUsers @deleteUser="deleteUser":users="users"></AllUsers>
        <RegisteredUsers @unRegister="unRegister":registeredUsers="registeredUsers"></RegisteredUsers>
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
                users: [
                    { id: 1, name: 'Sub Ziro', age: 150, registered: false },
                    { id: 2, name: 'Lu Kang', age: 500, registered: false },
                    { id: 3, name: 'Kostic Habare', age: 60, registered: false }
                ],
                registeredUsers: [
                    { id: 4, name: 'Scorpion', age: 1000, registered: true },
                ]
            }
        },
        methods: {
            deleteUser(user){
                console.log('this one gonna be registered');
            },
            unRegister(user){
                console.log('this one gonna be un registered');
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
