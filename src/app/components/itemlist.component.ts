import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

import { CartItem } from "../module";

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit, OnChanges {

  @Input() itemList: CartItem[] = [];
  @Output() onElementClick = new EventEmitter<string>();

  // currentList: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    // const newList = changes.itemList['currentValue'];
    // console.info('=> newList: ', newList);
    // console.info('=> currentList: ', this.currentList);

    /* if(newList) {
      newList.forEach(element => {
        this.currentList.push(element);
      });
      console.info('==> final currentList: ', this.currentList);
    } */
  }

  onItemClick(index: number) {
    // console.info('=> Index: ', index);
    console.info('=> id obtained: ', this.itemList[index]['id']);
    this.onElementClick.next(this.itemList[index]['id']);
  }

}
