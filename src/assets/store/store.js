import Vue from 'vue';
import Vuex from 'vuex';

import {state} from './state';
import Getters from './getters';
import Mutations from './mutations';
import Actions from './actions';


Vue.use(Vuex);

let store = new Vuex.Store({
    state: state,
    getters: Getters,
    mutations: Mutations,
    actions: Actions
});

export default store;