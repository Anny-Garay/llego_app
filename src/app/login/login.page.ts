import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string = '';
  contrasena : string = '';

  constructor(
    private route: Router
  ) { 

  }

  ingresar() {

    //preguntar al backend :)
    
    localStorage.setItem('user', this.email);
    this.route.navigate(['/'])
  }

  ngOnInit() {
  }

  

}
