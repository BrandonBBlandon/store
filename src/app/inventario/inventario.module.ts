import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnadirInventarioComponent } from './anadir-inventario/anadir-inventario.component';
import { VerInventarioComponent } from './ver-inventario/ver-inventario.component';
import { EliminarInventarioComponent } from './eliminar-inventario/eliminar-inventario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    AnadirInventarioComponent,
    VerInventarioComponent,
    EliminarInventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    AnadirInventarioComponent,
    VerInventarioComponent,
    EliminarInventarioComponent
  ]
})
export class InventarioModule { }
