import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoAccueilComponent } from "./components/demo-accueil/demo-accueil.component";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";
import { DemoComponent } from "./components/demo/demo.component";
import { RouteParamComponent } from "./components/route-param/route-param.component";


const routes: Routes = [

    { path: '', component: DemoComponent, children: [
        { path: '', redirectTo: 'accueil', pathMatch: 'full' },
        { path: 'accueil', component: DemoAccueilComponent },
        { path: 'binding', component: DemoBindingComponent },
        { path: 'pipe', component: DemoPipeComponent },
        { path: 'directive', component: DemoDirectivesComponent },
        { path: 'route-param/:param', component: RouteParamComponent }
    ]}

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class DemoRoutingModule{
}