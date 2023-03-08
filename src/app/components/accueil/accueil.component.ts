import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy{

  color:string = "#0000FF";
  currentDate: Date = new Date();

  nom?: string;
  age?: number;

  constructor() {
  }


  resetColor(){
    this.color = "#0000FF";
  }








  private _dateUpdateInterval!: number;

  
  start(): void {
    this._dateUpdateInterval = window.setInterval( () => this.currentDate = new Date(), 1000 );
  }

  stop(): void {
    clearInterval(this._dateUpdateInterval);  
  }

  ngOnInit(): void {
      this.start();
  }

  ngOnDestroy(): void {
      this.stop();
  }


}
