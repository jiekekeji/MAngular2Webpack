import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'comm'
})
export class CommPipe implements PipeTransform {

  transform(value: string): any {
    //转为大写字母返回
    return value.toLocaleUpperCase();
  }

}
