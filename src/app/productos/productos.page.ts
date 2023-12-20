import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Firestore, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    producto : any = {}; 
    firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient 
  ) { 
    this.route.params.subscribe(params =>{
      const producto_id = params['id'];

      const producto = doc(this.firestore,'productos/' +producto_id);
      docData<any>(producto).subscribe(data => {
      this.producto = data;
      });

      })
    };

  ngOnInit() {
  }

}
