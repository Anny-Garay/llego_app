import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Agregamos los imports necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {

  nombre_completo: any ='';
  telefono: any ='';
  cumpleanos: any ='';

  notificar: boolean = false;
  //Llamamos al modulo de firestore(base de datos de Firestore que estamos usando)
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.router.navigate(['/tabs/tab2/']);
      },
    },
  ];

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit() {
  }

  guardar(){
    let valores = {
      'nombre_completo' : this.nombre_completo,
      'telefono' : this.telefono,
      'cumpleanos' : this.cumpleanos
    }

      /*let url = 'http://localhost:3000/amigos/registrar'; //---esto de aqui, envia lo que esta guardado arriba en "guardar()"
      this.http.post(url, valores)
      .subscribe(data => {
        console.log('respuesta', data);

        this.notificar = true;
      })
      */

    console.log(valores)

    addDoc(collection(this.firestore,"amigos"),valores);
    this.notificar = true;
  }

}
