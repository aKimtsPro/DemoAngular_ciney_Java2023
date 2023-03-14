import { inject, NgModule } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes, CanMatchFn, Route } from "@angular/router";
import { DemoAccueilComponent } from "./components/demo-accueil/demo-accueil.component";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";
import { DemoComponent } from "./components/demo/demo.component";
import { ParentComponent } from "./components/parent/parent.component";
import { RouteParamComponent } from "./components/route-param/route-param.component";

function numberParamGuard(...paramNames: string[]): CanMatchFn {
    return (route, segments) => {
        const params = findParams(route)
        
        for(const [k, v] of params ){
            console.log(k,segments[v].path)
            if( paramNames.includes(k) && isNaN( parseInt(segments[v].path)) )
                return false; 
        }

        console.log('test');    

        return true;
    }
}


function findParams(route: Route): Map<string, number>{
    const params= new Map<string, number>();
    
    if(route.path === undefined)
        return params;

    const segments = route.path.split('/');

    for (const segment of segments) {
        if(segment.startsWith(':'))
            params.set(segment.substring(1), segments.indexOf(segment));
    }

    return params;
}

const routes: Routes = [

    { path: '', component: DemoComponent, children: [
        { path: '', redirectTo: 'accueil', pathMatch: 'full' },
        { path: 'accueil', component: DemoAccueilComponent },
        { path: 'binding', component: DemoBindingComponent },
        { path: 'pipe', component: DemoPipeComponent },
        { path: 'directive', component: DemoDirectivesComponent },
        { path: 'route-param/:param', component: RouteParamComponent, canMatch: [numberParamGuard('param')] },
        { path: 'comm', component: ParentComponent },
    ]}

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class DemoRoutingModule{
}