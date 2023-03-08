import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentDate: Date = new Date();

  constructor() {
    setInterval( () => this.currentDate = new Date(), 1000 );
  }

}
