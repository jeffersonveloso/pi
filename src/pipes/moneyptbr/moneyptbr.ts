import { Pipe, PipeTransform } from '@angular/core';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR.js';

@Pipe({
  name: 'moneyptbr',
})
export class MoneyptbrPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return new Intl.NumberFormat('pt-BR',{minimumFractionDigits:2, maximumFractionDigits:2}).format(value);
   }
}
