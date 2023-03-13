import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ExoModule } from './exo/exo.module';
import { DemoModule } from './demo/demo.module';
import { DirectDirective } from './standalone/directives/direct.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExoModule,
    DemoModule,
    DirectDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
