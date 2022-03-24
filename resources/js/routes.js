/*
import home  from './components/website/index.vue'
import notifications from './components/website/profile/alerts/notification.vue'
import profile from './components/website/profile/index.vue'
import free from './components/website/profile/music/free.vue'
import paid  from './components/website/profile/music/paid.vue'
import purchases  from './components/website/profile/music/purchases.vue'
import editMusic from './components/website/profile/music/edit.vue'
import explore from './components/website/profile/music/explore.vue'
import ads from './components/website/profile/ads/ads.vue'
import earnings from './components/website/profile/earnings/earnings.vue'
import playlist from './components/website/profile/playlist/playlist.vue'
import sales from './components/website/profile/sales/sales.vue'
import timeline from './components/website/profile/feeds/timeline.vue'
import inbox from './components/website/profile/inbox/inbox.vue'
import messages from './components/website/profile/inbox/messages.vue'
import upload from './components/website/profile/upload/upload.vue'
import edit from './components/website/profile/edit/edit.vue'
import following from './components/website/profile/follow/following.vue'
import followers from './components/website/profile/follow/followers.vue'
import uploaded from './components/website/profile/upload/uploaded.vue'
import s_settings from './components/website/profile/settings/security_settings.vue'
import p_settings from './components/website/profile/settings/payments_settings.vue'
import deactivate from './components/website/profile/settings/deactivate.vue'
import overview from './components/website/profile/ads/overview.vue'
import history from './components/website/profile/ads/history.vue'
import ads_start from  './components/website/profile/ads/start_promote.vue'
import insights from './components/website/profile/ads/view_insight .vue'
import history_insight from './components/website/profile/ads/history_insight.vue'
import mostDownload from './components/website/most_downloads.vue'
import playlisted from './components/website/download/playlisted.vue'
import changePassword from './components/website/resetpassword/change_pswd_desktop.vue'
import mycomponent from  './components/website/component.vue'
 */
const home = () => import('./components/website/index.vue')
const notifications = () => import('./components/website/profile/alerts/notification.vue')
const profile = () => import('./components/website/profile/index.vue')
const free = () => import('./components/website/profile/music/free.vue')
const paid = () => import('./components/website/profile/music/paid.vue')
const purchases = () => import('./components/website/profile/music/purchases.vue')
const editMusic = () => import('./components/website/profile/music/edit.vue')
const explore = () => import('./components/website/profile/music/explore.vue')
const ads = () => import('./components/website/profile/ads/ads.vue')
const earnings = () => import('./components/website/profile/earnings/earnings.vue')
const playlist = () => import('./components/website/profile/playlist/playlist.vue')
const sales = () => import('./components/website/profile/sales/sales.vue')
const timeline = () => import('./components/website/profile/feeds/timeline.vue')
const inbox = () => import('./components/website/profile/inbox/inbox.vue')
const messages = () => import('./components/website/profile/inbox/messages.vue')
const upload = () => import('./components/website/profile/upload/upload.vue')
const edit = () => import('./components/website/profile/edit/edit.vue')
const following = () => import('./components/website/profile/follow/following.vue')
const followers = () => import('./components/website/profile/follow/followers.vue')
const error = () => import('./components/website/error/error.vue')
const uploaded = () => import('./components/website/profile/upload/uploaded.vue')
const s_settings = () => import('./components/website/profile/settings/security_settings.vue')
const p_settings = () => import('./components/website/profile/settings/payments_settings.vue')
const deactivate = () => import('./components/website/profile/settings/deactivate.vue')
const overview = () => import('./components/website/profile/ads/overview.vue')
const history = () => import('./components/website/profile/ads/history.vue')
const ads_start = () => import('./components/website/profile/ads/start_promote.vue')
const insights = () => import('./components/website/profile/ads/view_insight .vue')
const history_insight = () => import('./components/website/profile/ads/history_insight.vue')
const mycomponent = () => import('./components/website/component.vue')
const mostDownload = () => import('./components/website/most_downloads.vue')
const playlisted = () => import('./components/website/download/playlisted.vue')
const changePassword = () => import('./components/website/resetpassword/change_pswd_desktop.vue')

export const routes = [
    {path: '/', component: home},
    {path: '/mostdownloads',component:mostDownload},
    {path: '/changepassword/:id', component:changePassword},
    {path: '/playlisted/:id', component: playlisted},
    {path: '/profile/',component:profile, children:[
        {path:'feeds',component:timeline},
        {path:'alerts',component:notifications},
        {path:'free/music',component:free},
        {path:'paid/music',component:paid},
        {path:'purchases/music',component:purchases},
        {path:'explore/music',component:explore},
        {path:'edit/music/:id',component:editMusic},
        {path:'ads',component:ads},
        {path:'playlist',component:playlist},
        {path:'sales',component:sales},
        {path:'inbox',component:inbox},
        {path:'inbox/messages/:id',component:messages},
        {path:'earnings',component:earnings},
        {path:'upload/music',component:upload},
        {path:'edit',component:edit},
        {path:'followings',component:following},
        {path:'followers',component:followers},
        {path:'security/settings',component:s_settings},
        {path:'security/settings/deactivate',component:deactivate},
        {path:'payment/settings',component:p_settings},
        {path:'uploaded/music',component:uploaded},
        {path:'ads/overview', component:overview},
        {path:'ads/history', component:history},
        {path:'ads/insights/:id', component:insights},
        {path:'ads/history/insights/:id', component:history_insight},
        {path:'ads/promote/:id', component:ads_start}
    ]},
    {path: '/:username/',component:mycomponent,children:[
        {path:':downloadCode',component:mycomponent},
        {path:'*', redirect:'/error'}
    ]},
    {path: '*', redirect: '/error'}
]