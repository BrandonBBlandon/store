import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';






@Injectable({
  providedIn: 'root'
  
})
export class PostService {

  

  constructor(
    
    private afs: AngularFirestore
   
    
  ){}


  




/* ------------------------------------------------------------------------------------------------------------------* */
  getPublicaciones(){
return this.afs.collection("Publicacion").snapshotChanges();
  }
  
  crearPublicacion(publicacion:any){
return this.afs.collection("Publicacion").add(publicacion)
  }

  updatepublicacion(id:any, publicacion:any){
return this.afs.collection("Publicacion").doc(id).update(publicacion);
  }
  
  deletePublicacion(serie:any){
return this.afs.collection("Publicacion").doc(serie).delete()
  }
  
  /* ------------------------------------------------------------------------------------------------------------------* */
  getProveedores(){
    return this.afs.collection("Proveedor").snapshotChanges();
      }
      
      crearProveedores(Proveedor:any){
    return this.afs.collection("Proveedor").add(Proveedor)
      }
    
      updateProveedores(identity:any, Proveedor:any){
    return this.afs.collection("Proveedor").doc(identity).update(Proveedor);
      }
      
      deleteProveedores(serie:any){
    return this.afs.collection("Proveedor").doc(serie).delete()
      }
  /* ------------------------------------------------------------------------------------------------------------------* */
  getVentas(){
    return this.afs.collection("ventas").snapshotChanges();
      }
      
     
  
  }
  
  