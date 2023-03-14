import { inject, NgModule } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes, CanMatchFn, Route, CanLoadFn, CanActivateChildFn } from "@angular/router";
import { numberParamGuard } from "../guards/common-guards.guard";
import { DemoAccueilComponent } from "./components/demo-accueil/demo-accueil.component";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";
import { DemoComponent } from "./components/demo/demo.component";
import { ParentComponent } from "./components/parent/parent.component";
import { RouteParamComponent } from "./components/route-param/route-param.component";

function minMaxGuard(paramName: string, min?: number, max?: number): CanActivateFn {
    return (route,state) => {
        const param = parseInt(route.params[paramName]);

        return !isNaN(param) && 
            (!min || param >= min) && 
            (!max || param <= max);
    }
}

const childGuard: CanActivateChildFn = (childRoute, state) => {
    return childRoute.url[0].path !== 'no-activation'
}

const routes: Routes = [

    { 
        path: '', 
        component: DemoComponent,
        canActivateChild: [childGuard],
        children: [
            { path: '', redirectTo: 'accueil', pathMatch: 'full' },
            { path: 'accueil', component: DemoAccueilComponent },
            { path: 'binding', component: DemoBindingComponent },
            { path: 'pipe', component: DemoPipeComponent },
            { path: 'directive', component: DemoDirectivesComponent },
            { 
                path: 'route-param/:param', 
                component: RouteParamComponent, 
                canActivate:[minMaxGuard('param',0,2)], 
                canMatch: [numberParamGuard('param')] 
            },
            { path: 'comm', component: ParentComponent },
            { path: 'no-activate', component: DemoAccueilComponent },
        ]
    }

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class DemoRoutingModule{
}