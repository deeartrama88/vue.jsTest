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
            { id: 4, name: 'Scorpion', age: 1000, registered: true },
        ]
    }
})