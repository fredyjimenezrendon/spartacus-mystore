import {Component} from '@angular/core';
import {MiniCartComponent} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {OrderEntry} from "@spartacus/core";

@Component({
  selector: 'app-my-mini-cart',
  templateUrl: './my-mini-cart.component.html',
  styleUrls: ['./my-mini-cart.component.scss']
})
export class MyMiniCartComponent extends MiniCartComponent {
      entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries();

}
