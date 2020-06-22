import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Yilber toledo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pi = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: { calle: 'Primera', casa: '20' },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 5000);
  });

  idioma = 'en';

  fecha = new Date();
}
