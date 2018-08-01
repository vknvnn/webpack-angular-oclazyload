function indexController() {
  var self = this;
  self.title = 'vknvnn';
}

let indexComponent = {
  template : require('./index.view.html'),
  controller : indexController,
  controllerAs: 'index',
  
}

const HOME_INDEX_MODULE = angular
  .module('home.module', [])
  .component('homeComponent', indexComponent);

export { HOME_INDEX_MODULE };
