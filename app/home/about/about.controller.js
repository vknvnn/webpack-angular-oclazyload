

class AboutController {    
  constructor(aboutService) {
    this.title = aboutService.title();

    console.log(google, moment());
  }
}

AboutController.$inject = [ 'aboutService' ];

export {AboutController} ;