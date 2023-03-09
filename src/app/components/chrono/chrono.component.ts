import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {

  minutes: number = 0;
  secondes: number = 0;
  chronoInterval?: number;

  play(){
    if( !this.chronoInterval )
      this.chronoInterval = window.setInterval(() => this.ticToc(), 1000)
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
      this.minutes = 0;
      this.chronoInterval = undefined;
    }
    
  }

  private ticToc(){
    console.log(this)
    if( this.secondes < 60) 
      this.secondes++
    else{
      this.secondes = 0;
      this.minutes++;
    }
  }

}
