import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.scss']
})
export class StockManagerComponent {

  enStock = [
    "tomate",
    "ail",
    "fromage",
    "poivron"
  ]

  enVente: string[] = []

  onToShop(produit: string){
    const index  = this.enStock.indexOf(produit);
    this.enStock.splice(index, 1);
    this.enVente.push( produit );
  }

  onToStock(produit: string){
    const index = this.enVente.indexOf(produit);
    this.enVente.splice(index, 1);
    this.enStock.push(produit);
  }
}
