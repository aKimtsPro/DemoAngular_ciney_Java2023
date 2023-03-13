import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent {

  color:string = "#0000FF";
  currentDate: Date = new Date();

  attributeBindingClass = "blue";

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
