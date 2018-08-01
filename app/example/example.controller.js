

function exampleController ($scope, exampleService) {
  const vm = this;
  vm.title = exampleService.title();
  console.log($scope);
}

/* @ngInject */
export default exampleController;