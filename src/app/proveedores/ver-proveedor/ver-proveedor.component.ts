import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/publicacion/post.service';

@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.css']
})
export class VerProveedorComponent implements OnInit {
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
    this.firebase.getProveedores().subscribe(resp=>{
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

}