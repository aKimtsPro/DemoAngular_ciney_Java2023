import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss']
})
export class DemoDirectivesComponent {

  color= 'green'
  fontSize= 14;
  isBordered= false;
  personnes= [
    {
      nom: 'luc',
      age: 62
    },
    {
      nom: 'marie',
      age: 34
    },
    {
      nom: 'dominique',
      age: 16
    }
  ]

  constructor() {
    setInterval( () => this.color = this.color == 'green' ? 'blue' : 'green', 500 ) 
  }

}
