import { Component } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private productService:ProductService,
    private router: Router) {}

  allProducts;

  getAllProducts()
  {
    this.productService.getProduct('/products').subscribe(data => {
      console.log(data);
      this.allProducts= data;
    });
  }

  toCart() {
    console.log('to cart');
    this.router.navigate(['/cart']);
  }

  productDetaills(id) {
    console.log('to product details with id:'+id);
    this.router.navigate(['/product-detail',id]);
  }
  
  ngOnInit() {
    this.getAllProducts();
  }
  
  
}

