<template>
    <div class="allUsersList">
        <h1>{{ msg }}</h1>
        <AllUsers @register="register":users="users"></AllUsers>
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
            register(user){
                let thisUser = this.users.find(function(user2){
                    if(user2.id === user.id){
                        user2.registered = true;
                        return user2;
                    };
                });
                this.registeredUsers.push(thisUser);
            },
            unRegister(user){
                let thisUser = this.users.find(function(user2){
                    if(user2.id === user.id){
                        user2.registered = false;
                        return user2;
                    };
                });
                this.registeredUsers.splice(this.registeredUsers.indexOf(thisUser), 1)
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
