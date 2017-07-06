import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'letterpipe'
})
export class LetterpipePipe implements PipeTransform {

  /**
   * 字母大写小的转换
   * @param value   需要转换的字母
   * @param isToLocaleUpperCase 1转为大写；否则转为小写
   * @returns {string}  转换后的值
   */
  transform(value: string, isToLocaleUpperCase: string): any {
    console.log(isToLocaleUpperCase);
    if (isToLocaleUpperCase === "1") {
      return value.toLocaleUpperCase();
    } else {
      return value.toLocaleLowerCase();
    }
  }

}
