import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoDirectiveComponent } from './components/exo-directive/exo-directive.component';
import { ExoDirectiveStructComponent } from './components/exo-directive-struct/exo-directive-struct.component';
import { ExoRdmColorDirective } from './directives/exo-rdm-color.directive';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './components/exo/exo.component';
import { ExoAccueilComponent } from './components/exo-accueil/exo-accueil.component';



@NgModule({
  declarations: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    ExoRdmColorDirective,
    ConvertSecPipe,
    ChronoComponent,
    ExoComponent,
    ExoAccueilComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ],
  exports: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    ExoRdmColorDirective,
    ConvertSecPipe,
    ChronoComponent
  ]
})
export class ExoModule { }
