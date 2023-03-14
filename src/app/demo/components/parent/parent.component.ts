import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  names = ['luc', 'pol', 'marie']

  onDelete(name: string){
    const index = this.names.indexOf(name);
    this.names.splice(index, 1);
  }
}
