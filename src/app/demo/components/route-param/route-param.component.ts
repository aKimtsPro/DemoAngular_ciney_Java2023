import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.scss']
})
export class RouteParamComponent {

  names= [
    'luc',
    'marie',
    'dominique'
  ]
  index = 0;

  constructor(route: ActivatedRoute){
    this.index = route.snapshot.params['param'];
  }

}
