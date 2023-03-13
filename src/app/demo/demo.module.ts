import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    HighlightDirective,
    ConvertSecPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    HighlightDirective,
    ConvertSecPipe
  ]
})
export class DemoModule { }
