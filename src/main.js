import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'lib-flexible/flexible.js';

Vue.config.productionTip = false;



Vue.use(MuseUI)

new Vue({
  render: h => h(App),

}).$mount('#app')
