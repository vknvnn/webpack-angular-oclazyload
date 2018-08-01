/* @ngInject */
function blogController($scope) {
  var self = this;
  self.title = 'blog';
  console.log($scope)
}

let blogComponent = {
  template: require('./blog.view.html'),
  controller: blogController,
  controllerAs: 'blog'
}

const BLOG_MODULE = angular
  .module('blog.module', [])
  .component('blogComponent', blogComponent);

export {
  BLOG_MODULE
};
