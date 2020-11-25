import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemlistComponent } from './components/itemlist.component';
import { ItemdetailComponent } from './components/itemdetail.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
