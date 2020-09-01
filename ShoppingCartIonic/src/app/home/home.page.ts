import { Component } from '@angular/core';
import { ProductService } from '../service/product.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private productService:ProductService,
    private http: HttpClient) {}

  allProducts;

  getAllProducts()
  {
    this.productService.getProduct('/products').subscribe(data => {
      console.log(data);
      this.allProducts= data;
    });
  }


  ngOnInit() {
    this.getAllProducts();
  }
  
  
}

