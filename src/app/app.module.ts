import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// Localization
import localEsCl from '@angular/common/locales/es-CL';
registerLocaleData(localEsCl);

import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr);

// Components
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenaPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
