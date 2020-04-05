import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  constructor() { }

  GetProducts(){
    return fetch('./assets/products.json');
 }
}
