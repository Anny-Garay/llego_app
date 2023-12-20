import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarproductoPage } from './registrarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarproductoPageRoutingModule {}
