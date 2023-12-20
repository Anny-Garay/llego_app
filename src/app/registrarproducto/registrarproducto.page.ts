import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//Agregamos los imports necesarios
import { Firestore,addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.page.html',
  styleUrls: ['./registrarproducto.page.scss'],
})
export class RegistrarproductoPage implements OnInit {

  nombre: any ='';
  peso: any ='';
  precio: any ='';
  stock: any ='';
  tipo: any ='';

  notificar: boolean = false;
  //Llamamos al modulo de firestore(base de datos de Firestore que estamos usando)
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.router.navigate(['/tabs/tab3/']);
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
      'peso' : this.peso,
      'precio' : this.precio,
      'stock' : this.stock,
      'tipo' : this.tipo
    }

    console.log(valores)

    addDoc(collection(this.firestore,"productos"),valores);
    this.notificar = true;
  }

}
