import { Component, OnInit } from '@angular/core';
import { NamesService } from '../../services/names.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
	names: string[] = [];

	constructor(
		private readonly namesService: NamesService
	){}

	ngOnInit(): void {
		this.names = this.namesService.names;
	}

	// Plus besoin si on utilise les services
	// addName(name: string) {
	// 	this.names.push(name);
	// }
}
