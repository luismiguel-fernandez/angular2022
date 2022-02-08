import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fabricante'
})
export class FabricantePipe implements PipeTransform {

  transform(value: any[], fab: string): any[] {
    if (value && value.length && fab != "0") {
      return (value.filter(coche => coche.fabricante == fab))
    }
    return value
  }

}
