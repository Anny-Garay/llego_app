import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  eventos: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
    private http: HttpClient, 
    private route: Router
    ) {
            //-----------------------------------------------------------Validamos si estamos logeados
          let user = localStorage.getItem('user');
          if (user == null) {
            this.route.navigate(['/login/'])
          }

          //-------------------------------------------------------------Traemos los eventos de Firebase
          const eventoCollection = collection(this.firestore,'eventos');
          this.eventos = collectionData(eventoCollection,{
            idField:'_id'
          });

          //this.http.get<any>('http://localhost:3000/eventos/listado')
          //  .subscribe(data => {
          //    console.log('eventos', data);
          //    this.eventos = data.eventos;
          //  })
      }
  verDetalle(evento: any){
    console.log(evento)
    this.route.navigate(['/evento/' +evento._id])
  }
  registrar(){
    this.route.navigate(['/registrarevento/'])
  }
}


