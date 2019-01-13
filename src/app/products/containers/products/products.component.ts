import { Component, OnInit } from '@angular/core'

import { Pizza } from '../../models/pizza.model'
// import { PizzasService } from '../../services/pizzas.service'
import { Store } from '@ngrx/store'
import { ProductsState, getPizzasIsloading, getAllPizzas } from '../../store'

@Component({
	selector: 'products',
	styleUrls: [ 'products.component.scss' ],
	template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
	pizzas: Pizza[]

	constructor(private store: Store<ProductsState>) {}

	ngOnInit() {
		this.store.select(getAllPizzas).subscribe(state => console.log(state))
	}
}
