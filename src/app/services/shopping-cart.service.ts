import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _cartItems: CartItem[] = [
    {
      id: 1,
      name: 'pizza hawaënne',
      qtt: 1,
      promo: true,
      price: 8
    }
  ] 

  private _nextId = 2;

  constructor() { }

  get cart(){
    return [...this._cartItems];
  }

  add(toAdd: CartItem){
    if( this.validate(toAdd) ){
      toAdd.id = this._nextId++;
      this._cartItems.push(toAdd);
    }
    
  }

  remove(id: number){
    this._cartItems.splice(this.findIndexById(id), 1)
  }

  incrementQtt(id: number){
    this._cartItems[ this.findIndexById(id) ].qtt++;
  }
  
  decrementQtt(id: number){
    const index = this.findIndexById(id);
    const item = this._cartItems[ index ];
    if(item.qtt <= 1)
      this._cartItems.splice(index, 1);
    else
      item.qtt-- 
  }

  private findIndexById(id: number) {
    return this._cartItems.findIndex(item => item.id === id);
  }

  private validate(item: CartItem) {
    return item.name.trim().length !== 0 &&
      item.price > 0 &&
      item.qtt > 0;
  }

}
