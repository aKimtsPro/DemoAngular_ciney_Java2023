import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { DemoAccueilComponent } from './components/demo-accueil/demo-accueil.component';
import { RouteParamComponent } from './components/route-param/route-param.component';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/parent/enfant/enfant.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from '../services/login.service';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';

@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    HighlightDirective,
    MiMajPipe,
    DemoComponent,
    DemoAccueilComponent,
    RouteParamComponent,
    ParentComponent,
    EnfantComponent,
    LoginComponent,
    DemoFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    ReactiveFormsModule
  ],
	providers: [
		LoginService
	]
})
export class DemoModule { }
