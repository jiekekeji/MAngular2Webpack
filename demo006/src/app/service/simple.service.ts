import {Injectable} from '@angular/core';

@Injectable()
export class SimpleService {

  constructor() {
  }

  getLoginState() {

    return "登录状态";
  }
}
