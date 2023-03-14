import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {

  toTest= 0;

  constructor(route: ActivatedRoute){
    this.toTest = route.snapshot.params['nbr']
  }

}
