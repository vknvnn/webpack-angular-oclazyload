// home.module.states.js

'use scrict';

const homeIndex = {
  name: 'home',
  url: '/home',
  component: 'homeComponent',
  resolve: {
    homeComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
      return $q((resolve) => {
        require.ensure([], () => {
          let mod = require('./index/index.module');
          $ocLazyLoad.load(mod.HOME_INDEX_MODULE);
          resolve(mod.default);
        }, 'home');
      });
    }]
  }
};

const homeAbout = {
  name: 'about',
  url: '/about',
  component: 'aboutComponent',
  resolve: {    
    loadCSS: [
      '$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load CSS files
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'PureCSS',
            files: [ 'https://unpkg.com/purecss@1.0.0/build/pure-min.css' ]
          }
        ]);
      }
    ],
    loadPlugin: [
      '$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load([ 
          {
            serie: true,
            name: 'Google Chart',
            files: [
              'https://www.gstatic.com/charts/loader.js'
            ]
          } 
        ]);
      }
    ],
    aboutComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
      return $q((resolve) => {
        require.ensure([], () => {
          let mod = require('./about/about.module');
          $ocLazyLoad.load(mod.HOME_ABOUT_MODULE);
          $ocLazyLoad.load('home.module');
          resolve(mod.HOME_ABOUT_MODULE);
        }, 'about');
      });
    }]
  }  
};

export { homeIndex, homeAbout };
