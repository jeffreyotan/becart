import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CartItem } from "../module";

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit, OnChanges {

  @Input()
  itemInfo: CartItem = {
    id: '',
    item: '',
    quantity: 0
  };

  @Output()
  onUpdate = new EventEmitter<CartItem>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control('', [ Validators.required ]),
      item: this.fb.control('None', [ Validators.required ]),
      quantity: this.fb.control('0', [ Validators.required ])  
    });
  }

  ngOnChanges(changes): void {
    const newItem = changes.itemInfo['currentValue'];
    if(newItem) {
      this.form.patchValue(newItem);
    }
    // console.info('===> form has properties: ', this.form);

    // or we can use the following
    // this.createForm(this.itemInfo);
  }

  createForm(item: CartItem = null): FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [ Validators.required ]),
      item: this.fb.control(item?.item, [ Validators.required, Validators.minLength(3) ]),
      quantity: this.fb.control(item?.quantity, [ Validators.required, Validators.min(0), Validators.max(100) ])
    });
  }

  processForm(): void {
    // console.info("===> processForm has ", this.form);
  }

  updateItem(): void {
    // the "as" keyword is a cast, coercion
    const enteredValue = this.form.value as CartItem;
    this.onUpdate.next(enteredValue);
    this.form.reset();
  }

}
