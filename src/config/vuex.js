import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        HW: 'Vuex初体验',
        login: false, //是否是从首页进入
        WinHeight:0,
        WinWidth:0
    },
    mutations: {
        auth(state) {
            state.login = true
        },
        clientHeight(state,payload){
            state.WinHeight = payload
        },
        clientWidth(state,payload){
            state.WinWidth = payload
        },
    }
})