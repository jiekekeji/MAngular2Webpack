import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {

  /**
   * 字母大写小的转换
   * @param value   需要转换的字母
   * @param isToLocaleUpperCase true转为大写；false转为小写
   * @returns {string}  转换后的值
   */
  transform(value: string, isToLocaleUpperCase: boolean): any {
    console.log(isToLocaleUpperCase);
    if (isToLocaleUpperCase) {
      return value.toLocaleUpperCase();
    } else {
      return value.toLocaleLowerCase();
    }
  }

}
