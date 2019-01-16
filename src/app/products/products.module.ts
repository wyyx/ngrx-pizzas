import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

// components
import * as fromComponents from './components'

// containers
import * as fromContainers from './containers'

// services
import * as fromServices from './services'
import { StoreModule } from '@ngrx/store'
import { productsReducers } from './store'
import { EffectsModule } from '@ngrx/effects'
import { PizzasEffects } from './store/effects/pizzas.effects'
import { ToppingsEffects } from './store/effects/toppings.effects'

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent
  },

  {
    path: 'new',
    component: fromContainers.ProductItemComponent
  },
  {
    path: ':pizzaId',
    component: fromContainers.ProductItemComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', productsReducers),
    EffectsModule.forFeature([PizzasEffects, ToppingsEffects])
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class ProductsModule {}
