import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarProveedorComponent } from './eliminar-proveedor/eliminar-proveedor.component';
import { AnadirProveedorComponent } from './anadir-proveedor/anadir-proveedor.component';
import { VerProveedorComponent } from './ver-proveedor/ver-proveedor.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    EliminarProveedorComponent,
    AnadirProveedorComponent,
    VerProveedorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ProveedoresModule { }
