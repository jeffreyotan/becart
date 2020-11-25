import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from './module';

@Injectable()
export class CartService {
    constructor(private http: HttpClient) {}

    expServer: string = "http://localhost:3000";

    async getCart(): Promise<CartItem[]> {
        return await this.http.get<CartItem[]>(this.expServer + '/cart').toPromise();
    }

    async getItem(id: string): Promise<CartItem> {
        return await this.http.get<CartItem>(this.expServer + '/cart/' + id).toPromise();
    }

    async updateItem(item: CartItem): Promise<any> {
        return await this.http.put<any>(this.expServer + '/cart/' + item['id'], item).toPromise();
    }
}