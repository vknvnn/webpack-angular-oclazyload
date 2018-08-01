class HelloWorldDirective {
  constructor() {
    this.template = '<div>{{helloWorld.name}}</div>';
    this.restrict = 'E';
    this.scope = {
      setTitleValue: '=',
      setScope: '='
    };
        
    this.controller = HelloWorldController;
    this.controllerAs = 'helloWorld';
    this.bindToController = true;
  }

  compile(tElement) {
    console.log('compile FUNCTION:', tElement);
    return this.link.bind(this);
  }
    
// Directive link function
  link(scope, ele, attrs) {
    console.log('LINK FUNCTION:', scope, ele, attrs);
  }  

  static instace() {
    return new HelloWorldDirective();
  }
}
  
// Directive's controller
class HelloWorldController { 
  
  constructor ($scope, $timeout) {
    this.name = 'david';   
    console.log(this, 'constructor');
    $timeout(function () {      
      this.setTitleValue('set parent title').bind($scope.$parent);      
    }.bind(this), 2000);
    // $timeout(function () {
    //   console.log($scope.setScope)
    //   if (this.ctr.setScope) {
    //     $scope.setScope($scope);
    //   }
    // });
  }
}
HelloWorldController.$inject = [
  '$scope', 
  '$timeout',
  'example2Service' 
];

export default HelloWorldDirective.instace;
  