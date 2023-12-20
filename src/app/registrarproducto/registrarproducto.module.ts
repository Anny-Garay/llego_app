import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarproductoPageRoutingModule } from './registrarproducto-routing.module';

import { RegistrarproductoPage } from './registrarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarproductoPageRoutingModule
  ],
  declarations: [RegistrarproductoPage]
})
export class RegistrarproductoPageModule {}
