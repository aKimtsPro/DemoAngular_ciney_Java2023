import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoDirectiveComponent } from './components/exo-directive/exo-directive.component';
import { ExoDirectiveStructComponent } from './components/exo-directive-struct/exo-directive-struct.component';
import { ExoRdmColorDirective } from './directives/exo-rdm-color.directive';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';



@NgModule({
  declarations: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    ExoRdmColorDirective,
    ConvertSecPipe,
    ChronoComponent
  ],
  imports: [
    CommonModule
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
