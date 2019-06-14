router['@dependencies'] = [
    'ReferenceForm',
    'Router',
    'Vue'
  ];
  
  function router({
    Bibliomaker,
    Router,
    Vue
  }) {
    Vue.use(Router);
  
    return new Router({
      routes: [
        {
          path: '/',
          name: 'Bibliomaker',
          component: Bibliomaker
        }
      ]
    });
  }
  
  export default {
    name: 'router',
    value: router
  };