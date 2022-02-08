import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tecnologia'
})
export class TecnologiaPipe implements PipeTransform {

  transform(value: any[], tec: string): any[] {
    if (value && value.length && tec != "0") {
      return (value.filter(coche => coche.tecnologia == tec))
    }
    return value
  }

}
