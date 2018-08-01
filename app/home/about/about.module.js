// about.module.js

'use strict';

import angular from 'angular';
import {AboutComponent} from './about.component';
import { aboutService } from './about.service'


// import AboutController from './about.controller';

// class AboutComponent {
//   constructor() {
//     this.template = require('./about.view.html');
//     this.controller = AboutController;
//   }
// }


const HOME_ABOUT_MODULE = angular
  .module('about.module', [])
  .component('aboutComponent', new AboutComponent())
  .service('aboutService', aboutService);

export { HOME_ABOUT_MODULE };
