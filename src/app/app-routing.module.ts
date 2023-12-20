import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'amigos/:id',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'registrarevento',
    loadChildren: () => import('./registrarevento/registrarevento.module').then( m => m.RegistrareventoPageModule)
  },
  {
    path: 'registraramigo',
    loadChildren: () => import('./registraramigo/registraramigo.module').then( m => m.RegistraramigoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productos/:id',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'registrarproducto',
    loadChildren: () => import('./registrarproducto/registrarproducto.module').then( m => m.RegistrarproductoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
