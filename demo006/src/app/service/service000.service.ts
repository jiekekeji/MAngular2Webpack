import {Injectable} from '@angular/core';

@Injectable()
export class Service000Service {

  constructor() {
  }

  getLoginState() {
    return Math.random();
  }
}
