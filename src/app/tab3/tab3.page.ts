import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  productos: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
    private http: HttpClient, 
    private route: Router
    ) {
        //-------------------------------------------------------------validamos si estamos logeados
        let user = localStorage.getItem('user');
        if (user == null) {
          this.route.navigate(['/login/'])
        }

        //-------------------------------------------------------------Traemos los eventos de Firebase
        const eventoCollection = collection(this.firestore,'productos');
        this.productos = collectionData(eventoCollection,{
          idField:'_id'
        });
  }
  verdetalle(producto: any){
    console.log(producto)
    this.route.navigate(['/productos/' +producto._id])
  }

  registrar(){
    this.route.navigate(['/registrarproducto/'])
  }
}
