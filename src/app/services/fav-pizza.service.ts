import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class FavPizzaService {

  private _pizza: Pizza[] = [
    {
      id: 1,
      nom: 'pizza margaritta'
    },
    {
      id: 2,
      nom: 'pizza hawaïenne'
    },
  ];
  private _nextId = 3;

  constructor() { }

  get pizza(){
    return [...this._pizza];
  }

  add(pizzaName: string){
    const pizza: Pizza = {
      id: this._nextId++,
      nom: pizzaName
    }
    this._pizza.push(pizza)
  }

  remove(id: number){
    const index = this._pizza.findIndex(pizza => pizza.id === id);
    this._pizza.splice(index, 1);
  }
}
