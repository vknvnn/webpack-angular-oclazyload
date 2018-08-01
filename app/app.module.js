import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'oclazyload';
import './home/home.module';
import { appRouting } from './app.routing';
import './example/example.module';
import './example2/example2.module';

angular.module('app', [ 
  uirouter, 'oc.lazyLoad',
  'homeModule', 'example2', 'example'

]).config(appRouting);