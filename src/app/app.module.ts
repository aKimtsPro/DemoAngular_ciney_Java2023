import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ChronoComponent } from './components/chrono/chrono.component';
import { DemoPipeComponent } from './components/demo/demo-pipe/demo-pipe.component';
import { DemoBindingComponent } from './components/demo/demo-binding/demo-binding.component';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ChronoComponent,
    DemoPipeComponent,
    DemoBindingComponent,
    MiMajPipe,
    ConvertSecPipe,
    DemoDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
