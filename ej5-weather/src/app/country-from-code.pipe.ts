import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFromCode'
})
export class CountryFromCodePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'ES': return "España"; break
    }
    return "not Spain"
  }

}
