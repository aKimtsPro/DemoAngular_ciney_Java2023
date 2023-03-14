import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ConvertSecPipe } from '../exo/pipes/convert-sec.pipe';
import { FormsModule } from '@angular/forms';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    HighlightDirective,
    MiMajPipe,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ],
  exports: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    HighlightDirective,
    MiMajPipe
  ]
})
export class DemoModule { }
