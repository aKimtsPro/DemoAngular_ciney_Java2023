import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
	names: string[] = [];

	addName(name: string) {
		this.names.push(name);
	}
}
