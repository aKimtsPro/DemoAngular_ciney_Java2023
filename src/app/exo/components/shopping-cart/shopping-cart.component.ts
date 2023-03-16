import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  toAdd: CartItem = {
    id: -1,
    name: '',
    price: 0,
    qtt: 1,
    promo: false
  }

  cart: CartItem[] = [];

  constructor(private readonly _service: ShoppingCartService){}

  ngOnInit(): void {
    this.loadCart();
  }

  addToCart(){
    this._service.add(this.toAdd);
    this.toAdd = {
      id: -1,
      name: '',
      price: 0,
      qtt: 1,
      promo: false
    }
    this.loadCart();
  }

  loadCart(){
    this.cart = this._service.cart;
  }

  removeFromCart(id: number) {
    this._service.remove(id);
    this.loadCart();
  }

  incQtt(id: number){
    this._service.incrementQtt(id);
  }

  decQtt(id: number){
    this._service.decrementQtt(id);
    this.loadCart();
  }
}
