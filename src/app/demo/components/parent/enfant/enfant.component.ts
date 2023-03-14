import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input()
  name!: string;

  @Output('delete')
  eventEmitter = new EventEmitter<string>();

  onClick(){
    this.eventEmitter.emit( this.name );
  }

}
