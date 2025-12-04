
import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Cart} from './components/cart/cart';
import { Inscription } from './components/inscription/inscription';

import { Paiement } from './components/paiement/paiement';
export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'inscription', component: Inscription },

  { path: 'products', component: ProductList},
  { path: 'cart', component: Cart },
  { path: 'paiement', component: Paiement },
  { path: '**', redirectTo: '/products' }
];
