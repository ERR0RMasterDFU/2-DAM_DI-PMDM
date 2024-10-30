import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeimg'
})
export class PokeimgPipe implements PipeTransform {

  transform(ps: number): string {
    return `${ps}.00`;
  }

}
