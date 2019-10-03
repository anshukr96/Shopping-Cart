import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Online Store</h1>
        <h6 class="text-center"><a [routerLink]="['/cart']">Cart: {{(cart | async).length}}</a></h6>
        <hr />
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'online-store';
  cart: Observable<Array<any>>


  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.cart = this.store.select('cart')
  }
}
