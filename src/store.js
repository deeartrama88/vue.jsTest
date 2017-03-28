import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            { id: 1, name: 'Sub Ziro', age: 150, registered: false },
            { id: 2, name: 'Lu Kang', age: 500, registered: false },
            { id: 3, name: 'Kostic Habare', age: 60, registered: false }
        ],
        registeredUsers: [
            // { id: 4, name: 'Scorpion', age: 1000, registered: true },
        ]
    },
    getters: {
        allUsers(state){
            return state.users;
        },
        unRegisteredUsers(state){
            return state.users.filter(user => {
                    return !user.registered;
                });
        }
    },
    mutations: {
        register(state, payload) {
            const user = state.users.find(user => {
               return user.id == payload.userId;
            });
            user.registered = true;
            state.registeredUsers.push(user);
        },
        unRegisterUser(state, payload) {
            const user = state.users.find(function(user){
                return user.id == payload.userId;
            });
            user.registered = false;
            state.registeredUsers.splice(state.registeredUsers.indexOf(user), 1);
        }
    },
    actions: {
        register(context, payload) {
            context.commit('register', payload);
        }
    }
})