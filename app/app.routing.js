'use strict';
import { blog } from './app.states';

/* @ngInject */
function appRouting($stateProvider) {
  $stateProvider.state(blog);
}


export { appRouting };
