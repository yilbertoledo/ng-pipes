import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLowerCase();
    let partes = value.split(' ');
    if (todas) {
      partes = partes.map((p) => {
        return p[0].toUpperCase() + p.substring(1);
      });
    } else {
      partes[0] = partes[0][0].toUpperCase() + partes[0].substring(1);
    }
    return partes.join(' ');
  }
}
