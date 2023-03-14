import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exo-accueil',
  templateUrl: './exo-accueil.component.html',
  styleUrls: ['./exo-accueil.component.scss']
})
export class ExoAccueilComponent {

  toTest = 0;

  constructor(private _router: Router){}

  testNumber(){
    this._router.navigate(['exo', 'routing', this.toTest])
  }

}
