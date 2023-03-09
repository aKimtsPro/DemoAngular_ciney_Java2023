import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {

  secondes: number = 0;
  chronoInterval?: number;

  play(){
    if( !this.chronoInterval )
      this.chronoInterval = window.setInterval(() => this.secondes++, 1000)
  }

  pause(){
    if( this.chronoInterval ){
      clearInterval( this.chronoInterval );
      this.chronoInterval = undefined;
    }
  }

  stop(){
    if( this.chronoInterval ){
      clearInterval( this.chronoInterval );
      this.secondes = 0;
      this.chronoInterval = undefined;
    }
    
  }

}
