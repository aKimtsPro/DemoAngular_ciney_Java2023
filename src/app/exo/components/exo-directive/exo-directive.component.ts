import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-directive',
  templateUrl: './exo-directive.component.html',
  styleUrls: ['./exo-directive.component.scss']
})
export class ExoDirectiveComponent {

  selectedSquare= 1;

  goLeft(){
     // si tout à gauche, on va tout à droite
    if( this.selectedSquare == 0 )
      this.selectedSquare = 2;
    else
      this.selectedSquare--;
  }

  goRight(){
    // si tout à droite, on va tout à gauche
    if( this.selectedSquare == 2 )
      this.selectedSquare = 0;
    else
      this.selectedSquare++;
  }

}
