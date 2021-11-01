import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/publicacion/post.service';
@Component({
  selector: 'app-anadir-inventario',
  templateUrl: './anadir-inventario.component.html',
  styleUrls: ['./anadir-inventario.component.css']
})
export class AnadirInventarioComponent implements OnInit {
  closeResult = '';
  inventoryForm: FormGroup
  constructor(
    private modalService: NgbModal,
    
    
      
      private firebase : PostService,
      public fb: FormBuilder)
  { }
  
  collection = {count:12, data:[]}
  ngOnInit(): void {

/*---------------------------se crea el form local-------------------*/

this.inventoryForm = this.fb.group({
    serie:['', Validators.required],
    name:['', Validators.required],
    type:['', Validators.required],
  })

    /*aca es donde se obtiene la info de firebase*/
    this.firebase.getPublicaciones().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return{
          serie: e.payload.doc.data().serie,
          name: e.payload.doc.data().name,
          type:e.payload.doc.data().type
         
          
        }
    
      })
    },
    error=>{
      console.error(error)
    }
    )

  
}

/*---------------------------guardar post-------------------*/

guardarPost(item):void{
  this.collection.data.push(item);
  this.firebase.crearPublicacion(this.inventoryForm.value).then(resp=>{
   this.inventoryForm.reset();
   this.modalService.dismissAll();
  }).catch(error=>{
    console.error(error)
  })


}












/*---------------------------configuracion de modal-------------------*/
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}




}
