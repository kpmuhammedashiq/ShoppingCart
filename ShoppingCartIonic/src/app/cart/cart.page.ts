import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private productService:ProductService,
    private router: Router) { }

  allProducts;
  ordered;
  totalAmount=0;

  getAllProducts()
  {
    this.productService.getProduct('/products').subscribe(data => {
      console.log(data);
      this.allProducts= data;
      var arr=new Array();
      var i=0;
      this.allProducts.forEach(element => {
        if(element.quantity>0){
          arr[i]=element;
          i++;
        }
      });
      this.ordered=arr;
    });
  }

  // totalAmount(){
  //   var total= 0;
  //   this.ordered.forEach(elt => {
  //     total=total+(elt.price*elt.quantity);
  //   });
  //   return total;
  // }

  ngOnInit() {
    this.getAllProducts();
    // this.totalAmount();
  }

}
