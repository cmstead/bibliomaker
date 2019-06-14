import container from './bibliomaker-container';

const Vue = container.build('Vue');
const router = container.build('router');

container
  .build('dataInitializationService')
  .initializeData();

Vue.config.productionTip = false

const App = container.build('App');

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
