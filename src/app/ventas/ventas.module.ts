import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerVentasComponent } from './ver-ventas/ver-ventas.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    VerVentasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class VentasModule { }
