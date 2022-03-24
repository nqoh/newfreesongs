require('./bootstrap');
window.Vue = require('vue');
import vueRoute from 'vue-router';
import {routes} from './routes';
import moment from 'moment'
import Meta from 'vue-meta';
import vueSession from 'vue-session';
import VueAnalytics from 'vue-analytics'
/*const renderer = require('vue-server-renderer').createRenderer()*/

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).fromNow()
    }
});


Vue.filter('formatNumber', function (value) {
    if(value){
        return new Intl.NumberFormat().format(value)
    }
})

Vue.filter('DateFormat', function (value) {
    if(value){
        return moment(value).calendar()
    }
})

Vue.filter('Ucfirst', function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
});
export const buss = new Vue();
Vue.use(Meta);
Vue.use(vueSession);
Vue.use(vueRoute);

const router = new vueRoute({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savePosition){
        if (to.hash) {
            return {x: 0, y: 900}
        }

    }
});


Vue.use(VueAnalytics, {
  id: 'UA-53925410-1',
  router
})

Vue.component('app-home', require('./components/App.vue').default)
Vue.component('app-headerx', require('./components/website/header/header.vue').default)
Vue.component('app-footer', require('./components/website/footer/footer.vue').default)
Vue.component('app-aboutus', require('./components/website/aboutus/aboutus.vue').default)
Vue.component('app-search', require('./components/website/search/search.vue').default)
Vue.component('app-contact', require('./components/website/contactus/contactus.vue').default)
Vue.component('app-copyright', require('./components/website/copyright/copyright.vue').default)
Vue.component('app-error', require('./components/website/error/error.vue').default)
Vue.component('app-help', require('./components/website/help/help.vue').default)
Vue.component('app-logon', require('./components/website/login/login.vue').default)
Vue.component('app-lyrics', require('./components/website/lyrics/lyrics.vue').default)
Vue.component('app-privacy', require('./components/website/privacy/privacy.vue').default)
Vue.component('app-register', require('./components/website/signup/signup.vue').default)
Vue.component('app-store', require('./components/website/store/store.vue').default)
Vue.component('app-terms', require('./components/website/terms/terms.vue').default)
Vue.component('app-artistp', require('./components/website/promote/artist_promote.vue').default)
Vue.component('app-fanp', require('./components/website/promote/fan_promote.vue').default)
Vue.component('app-delete', require('./components/website/delete/delete.vue').default)
Vue.component('app-download', require('./components/website/download/download.vue').default)
Vue.component('app-lounge', require('./components/website/lounge/index.vue').default)
Vue.component('app-resetpass', require('./components/website/resetpassword/resetpassword.vue').default)
Vue.component('app-mostdownloads', require('./components/website/most_downloads.vue').default)
Vue.component('app-unsubscribe', require('./components/website/unsuscribe/index.vue').default)

/*
Vue.component('app-home', require('./components/App.vue').default)
Vue.component('app-headerx', require('./components/website/header/header.vue').default)
Vue.component('app-footer', () => import('./components/website/footer/footer.vue'))
Vue.component('app-aboutus', () => import('./components/website/aboutus/aboutus.vue'))
Vue.component('app-search', () => import('./components/website/search/search.vue'))
Vue.component('app-contact', () => import('./components/website/contactus/contactus.vue'))
Vue.component('app-copyright', () => import('./components/website/copyright/copyright.vue'))
Vue.component('app-error', () => import('./components/website/error/error.vue'))
Vue.component('app-help', () => import('./components/website/help/help.vue'))
Vue.component('app-logon', () => import('./components/website/login/login.vue'))
Vue.component('app-lyrics', () => import('./components/website/lyrics/lyrics.vue'))
Vue.component('app-privacy', () => import('./components/website/privacy/privacy.vue'))
Vue.component('app-register', () => import('./components/website/signup/signup.vue'))
Vue.component('app-store', () => import('./components/website/store/store.vue'))
Vue.component('app-terms', () => import('./components/website/terms/terms.vue'))
Vue.component('app-artistp', () => import('./components/website/promote/artist_promote.vue'))
Vue.component('app-fanp', () => import('./components/website/promote/fan_promote.vue'))
Vue.component('app-delete', () => import('./components/website/delete/delete.vue'))
Vue.component('app-download', () => import('./components/website/download/download.vue'))
Vue.component('app-lounge', () => import('./components/website/lounge/index.vue'))
Vue.component('app-resetpass',() => import('./components/website/resetpassword/resetpassword.vue'))
Vue.component('app-mostdownloads', () => import('./components/website/most_downloads.vue'))*/

const app = new Vue({
    el: '#app',
    router
});

/*renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
})

renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})*/
