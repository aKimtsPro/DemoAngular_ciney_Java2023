import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent {

  currentDate = new Date();
  livre = {
    titre: 'mon livre',
    auteur: 'author',
    nbrPage: 120
  }

}
