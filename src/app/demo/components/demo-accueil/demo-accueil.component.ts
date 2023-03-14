import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-accueil',
  templateUrl: './demo-accueil.component.html',
  styleUrls: ['./demo-accueil.component.scss']
})
export class DemoAccueilComponent {

  indexChosen= 0;

  constructor(private _router: Router){}

  onClick(){
    // this._router.navigateByUrl(`/demo/route-param/${this.indexChosen}`);
    this._router.navigate(['demo', 'route-param', this.indexChosen]);
  }

}
