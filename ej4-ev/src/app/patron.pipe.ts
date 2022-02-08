import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patron'
})
export class PatronPipe implements PipeTransform {

  transform(value: any[], pattern: string = ""): any[] {
    if (value && value.length) {
      return (value.filter(coche => coche.nombre.toLowerCase().includes(pattern.toLowerCase())))
    }
    return value
  }

}
