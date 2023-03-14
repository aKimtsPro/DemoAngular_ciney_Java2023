import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss']
})
export class InventaireComponent {


  @Input()
  stock: string[] = []

  @Output('to-shop')
  toShopEmitter = new EventEmitter<string>();

  onClick(produit: string){
    this.toShopEmitter.emit( produit );
  }

}
