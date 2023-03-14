import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule ) },
  { path: 'exo', loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
