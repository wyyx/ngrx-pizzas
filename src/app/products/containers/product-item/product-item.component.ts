import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Pizza } from '../../models/pizza.model'
import { Topping } from '../../models/topping.model'
import { ProductsState } from '../../store'
import { LoadToppings } from '../../store/actions/toppings.action'
import { getCurrentPizza } from '../../store/selectors/pizzas.selectors'
import { getAllToppings } from '../../store/selectors/toppings.selectors'

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)"
      >
        <pizza-display [pizza]="visualise"> </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>
  visualise: Pizza
  toppings$: Observable<Topping[]>

  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(getCurrentPizza)
    this.toppings$ = this.store.select(getAllToppings)
    this.store.dispatch(new LoadToppings())
  }

  onSelect(event: number[]) {}

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?')
    if (remove) {
    }
  }
}
