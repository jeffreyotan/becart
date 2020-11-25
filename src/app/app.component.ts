import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { CartItem } from "./module";
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Our connected Shopping Cart';

  expServer = 'http://localhost:3000';

  contents: CartItem[] = [];
  itemDetails: CartItem = {
    id: '',
    item: '',
    quantity: 0
  };

  // fb - service, dependency injection (in the FormBuilder example)
  // the private keyword makes the argument into an attribute
  // so, you don't need to
  // h: HttpClient;
  // constructor(http: HttpClient) {
  //   this.h = http;
  // }
  constructor(private cartSvc: CartService) {}

  async ngOnInit() {
    // we will get an observable, so have to call .toPromise to obtain a Promise
    // let resource = '/cart';
    // this.contents = await this.http.get<CartItem[]>(this.expServer + resource).toPromise();
    this.contents = await this.cartSvc.getCart();
    // console.info("==> contents: ", this.contents);
  }

  async onItemSelected($event: string) {
    // console.info('==> onItemSelected id: ', $event);
    // let resource = '/cart/' + $event;
    // this.itemDetails = await this.http.get<CartItem>(this.expServer + resource).toPromise();
    this.itemDetails = await this.cartSvc.getItem($event);
    // console.info('==> itemDetails: ', this.itemDetails);
  }

  async updateItem($event: CartItem) {
    console.info('==> updateItem: ', $event);
    const resource = '/cart/' + $event['id'];

    // PUT /cart/:id
    // const srvReply = await this.http.put<any>(this.expServer + resource, $event).toPromise();
    await this.cartSvc.updateItem($event);

    // Refresh the list
    // this.contents = await this.http.get<CartItem[]>(this.expServer + '/cart').toPromise();
    this.contents = await this.cartSvc.getCart();
  }
}
