import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChronoComponent } from "./components/chrono/chrono.component";
import { ExoDirectiveStructComponent } from "./components/exo-directive-struct/exo-directive-struct.component";
import { ExoDirectiveComponent } from "./components/exo-directive/exo-directive.component";

const routes: Routes = [
    { path: 'chrono', component: ChronoComponent },
    { path: 'directive', component: ExoDirectiveComponent },
    { path: 'dir-struct', component: ExoDirectiveStructComponent },
]

@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
})
export class ExoRoutingModule{
}