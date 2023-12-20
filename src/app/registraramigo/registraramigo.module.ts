import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraramigoPageRoutingModule } from './registraramigo-routing.module';

import { RegistraramigoPage } from './registraramigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraramigoPageRoutingModule
  ],
  declarations: [RegistraramigoPage]
})
export class RegistraramigoPageModule {}
