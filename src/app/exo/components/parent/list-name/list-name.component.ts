import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss']
})
export class ListNameComponent {
	@Input() names: string[] = [];
}
