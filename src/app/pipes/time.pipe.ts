import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date | string, ...args: any[]): string {
    if (!value) return '';

    const date = typeof value === 'string' ? new Date(value) : value;

    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]} ${year} года`;
  }
}


