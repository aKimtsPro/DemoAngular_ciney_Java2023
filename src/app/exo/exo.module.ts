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
import { RoutingComponent } from './components/routing/routing.component';
import { FormsModule } from '@angular/forms';
import { StockManagerComponent } from './components/stock-manager/stock-manager.component';
import { InventaireComponent } from './components/stock-manager/inventaire/inventaire.component';
import { EnVenteComponent } from './components/stock-manager/en-vente/en-vente.component';
import { ParentComponent } from './components/parent/parent.component';
import { CreateNameComponent } from './components/parent/create-name/create-name.component';
import { ListNameComponent } from './components/parent/list-name/list-name.component';

@NgModule({
  declarations: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    ExoRdmColorDirective,
    ConvertSecPipe,
    ChronoComponent,
    ExoComponent,
    ExoAccueilComponent,
    RoutingComponent,
    StockManagerComponent,
    InventaireComponent,
    EnVenteComponent,
    ParentComponent,
    CreateNameComponent,
    ListNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
