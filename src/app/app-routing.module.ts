import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirInventarioComponent } from './inventario/anadir-inventario/anadir-inventario.component';
import { EliminarInventarioComponent } from './inventario/eliminar-inventario/eliminar-inventario.component';
import { VerInventarioComponent } from './inventario/ver-inventario/ver-inventario.component';
import { AnadirProveedorComponent } from './proveedores/anadir-proveedor/anadir-proveedor.component';
import { VerProveedorComponent } from './proveedores/ver-proveedor/ver-proveedor.component';
import { EliminarProveedorComponent } from './proveedores/eliminar-proveedor/eliminar-proveedor.component';
import { VerVentasComponent } from './ventas/ver-ventas/ver-ventas.component';
const routes: Routes = [
  
  { path: 'inventario', component: VerInventarioComponent },
  { path: 'inventario/anadir', component: AnadirInventarioComponent },
  { path: 'inventario/borrar', component: EliminarInventarioComponent },
  { path: 'proveedor', component: VerProveedorComponent },
  { path: 'proveedor/anadir', component: AnadirProveedorComponent },
  { path: 'proveedor/borrar', component: EliminarProveedorComponent },
  { path: 'venta', component: VerVentasComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    RouterModule.forRoot(
     routes,
      { } // <-- debugging purposes only
    )],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
RouterModule.forRoot(
  [
    /*{ path: "", component: LoginComponent},*/
    
  ]
)