import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";
import { DemoComponent } from "./components/demo/demo.component";


const routes: Routes = [

    { path: '', component: DemoComponent, children: [
        { path: 'binding', component: DemoBindingComponent },
        { path: 'pipe', component: DemoPipeComponent },
        { path: 'directive', component: DemoDirectivesComponent }
    ]}

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class DemoRoutingModule{
}