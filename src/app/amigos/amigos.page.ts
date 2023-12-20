import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Firestore, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  
    amigo : any = {}; 
    firestore: Firestore = inject(Firestore);
  
    constructor(
      private route: ActivatedRoute,
      private http: HttpClient 
      ) { 
          this.route.params.subscribe(params =>{
            const amigo_id = params['id'];

            const amigo = doc(this.firestore,'amigos/' +amigo_id);
            docData<any>(amigo).subscribe(data => {
            this.amigo = data;
            });
  
              /*this.http.get<any>('http://localhost:3000/amigos/detalle/'+ amigo_id)
              .subscribe(data => {
              console.log('amigos', data);

              this.amigo=data.amigo
                */
          })
        };
  
    ngOnInit() {
    }
  
  }

