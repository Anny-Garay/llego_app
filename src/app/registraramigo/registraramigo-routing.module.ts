import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraramigoPage } from './registraramigo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraramigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraramigoPageRoutingModule {}
