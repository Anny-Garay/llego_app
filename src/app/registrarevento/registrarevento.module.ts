import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrareventoPageRoutingModule } from './registrarevento-routing.module';

import { RegistrareventoPage } from './registrarevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrareventoPageRoutingModule
  ],
  declarations: [RegistrareventoPage]
})
export class RegistrareventoPageModule {}
