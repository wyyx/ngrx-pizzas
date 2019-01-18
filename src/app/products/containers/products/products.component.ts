import { Component, OnInit, OnDestroy } from '@angular/core'

import { Pizza } from '../../models/pizza.model'
// import { PizzasService } from '../../services/pizzas.service'
import { Store } from '@ngrx/store'
import { Observable, Subject } from 'rxjs'
import { LoadPizzas } from '../../store/actions/pizzas.action'
import { ProductsState } from '../../store'
import { getAllPizzas, getPizzasLoaded } from '../../store/selectors/pizzas.selectors'
import { switchMap, map, takeUntil, tap, take } from 'rxjs/operators'

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new"><a class="btn btn__ok" routerLink="./new"> New Pizza </a></div>
      <div class="products__list">
        <div *ngIf="!(pizzas$ | async)?.length">No pizzas, add one to get started.</div>
        <pizza-item *ngFor="let pizza of (pizzas$ | async)" [pizza]="pizza"> </pizza-item>
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
