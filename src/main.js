import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

// Production Tip
Vue.config.productionTip = false;

// Global Vars
const apiUrl = 'http://localhost:8000';

// Mixins
Vue.mixin({
  data () {
    return {
      get apiUrl () {
        return apiUrl
      }
    }
  }
});

// Router
Vue.use(VueRouter);
const router  = new VueRouter({
  mode: 'history',
  routes
});

// Router - allow dynamic page titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

// Vue Instance
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
