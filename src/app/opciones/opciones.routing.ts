import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TablaComponent } from './tabla/tabla.component';

const mainRoutes: Routes = [{
    path: 'main/rutas', component: MainComponent,
    children: [
        {path: '', redirectTo: 'home',  pathMatch: 'full',},
        {path: 'tablas', component: TablaComponent,}
    ]
}]

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class OpcionesRoutingModule { }
