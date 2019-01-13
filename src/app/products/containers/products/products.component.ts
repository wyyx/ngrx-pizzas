import { Component, OnInit } from '@angular/core'

import { Pizza } from '../../models/pizza.model'
// import { PizzasService } from '../../services/pizzas.service'
import { Store } from '@ngrx/store'
import { ProductsState, getPizzasIsloading, getAllPizzas } from '../../store'
import { Observable } from 'rxjs'
import { LoadPizzas } from '../../store/actions/pizzas.action'

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
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of pizzas$ | async"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
	pizzas$: Observable<Pizza[]>

	constructor(private store: Store<ProductsState>) {}

	ngOnInit() {
		this.pizzas$ = this.store.select(getAllPizzas)
		this.store.dispatch(new LoadPizzas())
	}
}
