import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DemoBindingComponent } from './demo/components/demo-binding/demo-binding.component';
import { DemoDirectivesComponent } from './demo/components/demo-directives/demo-directives.component';
import { DemoPipeComponent } from './demo/components/demo-pipe/demo-pipe.component';
import { ChronoComponent } from './exo/components/chrono/chrono.component';
import { ExoDirectiveStructComponent } from './exo/components/exo-directive-struct/exo-directive-struct.component';
import { ExoDirectiveComponent } from './exo/components/exo-directive/exo-directive.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'demo/binding', component: DemoBindingComponent },
  { path: 'demo/pipe', component: DemoPipeComponent },
  { path: 'demo/directive', component: DemoDirectivesComponent },
  { path: 'exo/chrono', component: ChronoComponent },
  { path: 'exo/directive', component: ExoDirectiveComponent },
  { path: 'exo/dir-struct', component: ExoDirectiveStructComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
