import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Agregamos los imports necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';


//-----------------------------------------------Todo lo que se coloca aqui se pone en el constructor que esta en la parte de abajo

@Component({
  selector: 'app-registrarevento',
  templateUrl: './registrarevento.page.html',
  styleUrls: ['./registrarevento.page.scss'],
})
export class RegistrareventoPage implements OnInit {

  nombre: any ='';
  fecha: any ='';
  lugar: any ='';
  notas: any ='';

  notificar: boolean = false;
  //Llamamos al modulo de firestore(base de datos de Firestore que estamos usando)
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.router.navigate(['/tabs/tab1/']);
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
      'nombre' : this.nombre,
      'lugar' : this.lugar,
      'fecha' : this.fecha,
      'notas' : this.notas
    }
/*
    //--------------------------------------------------------es parecido al tab1.page.ts solo que ya no se agrega el "any" porque estamos enviando "data"
    let url = 'http://localhost:3000/eventos/registrar'; //---esto de aqui, envia lo que esta guardado arriba en "guardar()"
    this.http.post(url, valores)
    .subscribe(data => {
      console.log('respuesta', data);

      this.notificar = true;
    })
*/
    console.log(valores)

    addDoc(collection(this.firestore,"eventos"),valores);
    this.notificar = true;
  }

  //hacer los mismo para registrar amigo

}
