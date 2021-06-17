import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logoText: "OvSyunLive",
        logoMiniText: "OVL",
        serverInfo: null,
        userInfo: null,
        menus: [
            {
                path: '/',
                title: "首页",
                icon: 'dashboard'
            }, {
                path: '/pushers/1',
                title: "拉流列表",
                icon: "video-camera"
            }, {
                path: '/players/1',
                title: "播流列表",
                icon: "play"
            }, {
                path: '/users/1',
                title: '用户管理',
                icon: 'users'
            }
        ]
    },
    mutations: {
        updateServerInfo(state, serverInfo) {
            state.serverInfo = serverInfo;
        },
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions : {
        getServerInfo({commit}){
            return new Promise((resolve, reject) => {
                $.post('/serverInfo').then(serverInfo => {
                    commit('updateServerInfo', serverInfo);
                    resolve(serverInfo);
                }).fail(() => {
                    resolve(null);
                });
            })
        },
        getUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                $.post("/userInfo").then(userInfo => {
                    commit('updateUserInfo', userInfo);
                    resolve(userInfo);
                }).fail(() => {
                    resolve(null);
                })
            })
        },   
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                $.get('/logout').then(data => {
                    commit('updateUserInfo', null);
                    resolve(null);
                }).fail(() => {
                    resolve(null);
                })
            })
        }
    }
})

export default store;