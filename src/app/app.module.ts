import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionesModule } from './opciones/opciones.module';
import { TablaComponent } from './opciones/tabla/tabla.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { OpcionesRoutingModule } from './opciones/opciones.routing';
import { NewService } from '../../src/app/servicios/new.service'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TablaComponent,
    AppComponent,
    OpcionesComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OpcionesModule,
    OpcionesRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
