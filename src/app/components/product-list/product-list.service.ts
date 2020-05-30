import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  // variables
  productsData;

  getProducts() {
      // api call
      debugger;
      return this.http.get('http://localhost:3000/api/products')

    //   return this.productsData;
  }
}
