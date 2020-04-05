import { Component, OnInit } from '@angular/core';
import { ProductdataService } from './shared/productservice.service';

import { Product, selectedProd } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  productList:Product[] = new Array();
  selectedProductList: selectedProd[] = new Array();
  totalAmount: number;
  totalQuntity: number;
  check: boolean = false;

  constructor(private productDataservice: ProductdataService){
  }

  ngOnInit(){
    this.getProductDetails();
  }

  // To fetch data from json file using fetch() API
  getProductDetails(){
    this.productDataservice.GetProducts().then((response)=>{
      response.json().then((data)=>{
        this.productList = data;
      });
    }).catch((err)=>{
      console.log(err);
    });
  }

  // function on clicking Add to cart button
  addToCart(index,event){
     let prod: selectedProd = new selectedProd();
     if(this.selectedProductList != null && this.selectedProductList.length > 0){
        for(let i = 0; i < this.selectedProductList.length; i++){
          if(this.selectedProductList[i].id == this.productList[index].id){
            return;
          }
        }
      }
      prod.id = this.productList[index].id;
      prod.price = this.productList[index].price;
      prod.quantity = 1;
      this.selectedProductList.push(prod);
      this.calculateTotalAmount();
  }

  // function on adding/removing the product
  addorRemove(index, type){
    if(type == "add"){
      this.selectedProductList[index].quantity++;
    }else{
      this.selectedProductList[index].quantity--;
      if(this.selectedProductList[index].quantity == 0){
        this.selectedProductList.splice(index, 1);
      }
    }
    this.calculateTotalAmount();
  }

  // to calculate total quantity and total price of the products added to cart
  calculateTotalAmount() {
    this.totalAmount = 0;
    this.totalQuntity = 0;
    if(this.selectedProductList != null && this.selectedProductList.length > 0){
      for(let i = 0; i < this.selectedProductList.length; i++){
        this.totalAmount += (this.selectedProductList[i].quantity * this.selectedProductList[i].price);
        this.totalQuntity += this.selectedProductList[i].quantity;
      }
    }
  }

// function on clicking checkout button
  checkoutDetails(){
        this.check=true;
        this.calculateTotalAmount();
  }

  // function on clicking close button
  closeBtn(){
       this.check=false;
  }
}
