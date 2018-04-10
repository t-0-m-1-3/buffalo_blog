require("expose-loader?$!expose-loader?jQuery!jquery");
require("bootstrap-sass/assets/javascripts/bootstrap.js");
import Vue from 'vue';
import VueRouter from 'router';
Vue.use(VueRouter);

import App from './components/App.vue';
// import HomeComponent from './components/Home.vue';

// const routes = [

//     {path: "/"},
//     {path: "/home", comopnent: HomeComponent}
// ];

// const router = new VueRouter({
//     mode: "history",
//     routes
// });

// const app =
    new Vue({
    // router
// }).$mount("#app");
    el: 'app',
    components:{App}
})
