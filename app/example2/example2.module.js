import angular from 'angular';
import routing from './example2.route';
import component from './example2.component';
import service from './example2.service';
import HelloWorld from './helloword.directive'

/* @ngInject */
angular
  .module('example2', [])
  .component('example2', component)  
  .factory('example2Service', service)
  .directive('ciHelloWorld', HelloWorld)
  .config(routing);
  