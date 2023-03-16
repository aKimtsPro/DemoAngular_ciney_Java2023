import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { FavPizzaService } from 'src/app/services/fav-pizza.service';

@Component({
  selector: 'app-fav-pizza',
  templateUrl: './fav-pizza.component.html',
  styleUrls: ['./fav-pizza.component.scss']
})
export class FavPizzaComponent implements OnInit {

  favPizza: Pizza[] = [];
  newPizzaName: string = '';

  constructor(private readonly _service: FavPizzaService){}
  
  ngOnInit(): void {
    this.loadFavPizza();
  }

  loadFavPizza(){
    this.favPizza = this._service.pizza;
  }

  addPizza(){
    this._service.add(this.newPizzaName);
    this.newPizzaName = '';
    this.loadFavPizza();
  }

  removePizza(id: number){
    this._service.remove(id);
    this.loadFavPizza();
  }

}
