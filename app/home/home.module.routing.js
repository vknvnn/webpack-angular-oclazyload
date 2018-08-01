// home.module.routing.js

'use strict';

import { homeIndex, homeAbout } from './home.module.states';

/* @ngInject */
function homeRouting($urlRouterProvider, $stateProvider, $locationProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.hashPrefix('');
  $stateProvider.state(homeIndex);
  $stateProvider.state(homeAbout);
  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true,
    modules : [ 
      {
        name : 'home.module',
        files : [ 'http://localhost:9000/home.module.js' ]
      } 
    ]
  });

}

export { homeRouting };
