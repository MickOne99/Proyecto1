import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { OpcionesModule } from './opciones/opciones.module';

/*Routing es el sistema de enrutamiento con el cual se identifica la ubicacion exacta del archivo 
  que se esta buscando; tambien nos permite que el sitio web tenga rutas internas
  
  Componentes necesarios para un Routing: 

  - El módulo del sistema de rutas: llamado RouterModule.
  - Rutas de la aplicación: es un array con un listado de rutas que nuestra aplicación soportará.
  - Enlaces de navegación: son enlaces HTML en los que incluiremos una directiva para indicar que
    deben funcionar usando el sistema de routing.
  - Contenedor: donde colocar las pantallas de cada ruta. Cada pantalla será representada por un componente.
  */

const rutas: Routes = [
  { path: '', 
    component: AppComponent },

  { path: 'opciones',
    component: OpcionesComponent },
  
  {
    path: 'opciones',
    component: OpcionesModule }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
