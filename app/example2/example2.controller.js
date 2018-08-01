/* @ngInject */
export default class Example2Controller {
  constructor($scope, example2Service) {
    this.title = example2Service.title();
    this.hellwordScope = null;  
  }

  sayHello() {
    console.log(this);    
  }
  
  setTitle(title) {    
    this.title = title;
    console.log(title, this);
  }

  setHelloWordScope(s) {
    this.hellwordScope = s;
    console.log(s);
  }
};
