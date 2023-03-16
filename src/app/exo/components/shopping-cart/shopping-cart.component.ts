import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/models/cart-item.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  form: FormGroup;
  cart: CartItem[] = [];


  constructor(private readonly _service: ShoppingCartService, builder: FormBuilder){
    // this.form = new FormGroup({
    //   name: new FormControl('', {}),
    //   price: new FormControl(),
    //   qtt: new FormControl(),
    //   promo: new FormControl()
    // })
    this.form = builder.group({
      name: [,[Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-z]+')]],
      price: [,[Validators.required, Validators.min(0)]],
      qtt: [1, [Validators.required, Validators.min(0)]],
      promo: [false]
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  addToCart(){
    if( this.form.valid ){
      const toAdd: CartItem = {
        id: -1,
        ...this.form.value
      }
      this._service.add(toAdd);
      this.form.reset({ qtt: 1, promo: false })
      this.loadCart();
    }
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
