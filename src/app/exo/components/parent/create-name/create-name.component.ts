import { Component, EventEmitter, Output } from '@angular/core';
import { NamesService } from 'src/app/exo/services/names.service';

@Component({
  selector: 'app-create-name',
  templateUrl: './create-name.component.html',
  styleUrls: ['./create-name.component.scss']
})
export class CreateNameComponent {
	// Valeur de l'input text du composant
	value: string = '';

	constructor(
		private readonly namesService: NamesService
	){}

	// @Output() onAddName: EventEmitter<string> = new EventEmitter<string>();

	// Méthode d'ajout d'un élément en utilisant la méthode reçu du parent
	addNewName() {
		// this.onAddName.emit(this.value);
		this.namesService.addName(this.value);
		this.value = '';
	}
}
