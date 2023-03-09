import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-directive-struct',
  templateUrl: './exo-directive-struct.component.html',
  styleUrls: ['./exo-directive-struct.component.scss']
})
export class ExoDirectiveStructComponent {


  products = [
    {
      marque: "marque1",
      modele: "modele1",
      prix: 1,
      stock: 1
    },
    {
      marque: "marque1",
      modele: "modele2",
      prix: 25,
      stock: 0
    },
    {
      marque: "marque2",
      modele: "modele1",
      prix: 200,
      stock: 10
    }
  ]

}
