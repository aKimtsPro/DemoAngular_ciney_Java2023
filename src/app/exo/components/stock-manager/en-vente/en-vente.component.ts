import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-en-vente',
  templateUrl: './en-vente.component.html',
  styleUrls: ['./en-vente.component.scss']
})
export class EnVenteComponent {

  @Input()
  enVente: string[] = []

  @Output('to-stock')
  toStockEmitter = new EventEmitter<string>()

  onClick(produit: string){
    this.toStockEmitter.emit( produit )
  }
  
}
