
import {AboutController} from './about.controller';

class AboutComponent {
  constructor() {
    this.template = require('./about.view.html');
    this.controller = AboutController;
  }
}

export {AboutComponent};