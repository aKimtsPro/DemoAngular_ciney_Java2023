import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChronoComponent } from './exo/components/chrono/chrono.component';
import { ExoDirectiveStructComponent } from './exo/components/exo-directive-struct/exo-directive-struct.component';
import { ExoDirectiveComponent } from './exo/components/exo-directive/exo-directive.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule ) },
  { path: 'exo/chrono', component: ChronoComponent },
  { path: 'exo/directive', component: ExoDirectiveComponent },
  { path: 'exo/dir-struct', component: ExoDirectiveStructComponent },
  { path: 'standalone', loadChildren: () => import('./standalone/test-routes').then(r => r.TEST_ROUTES)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
