import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,
    private productService:ProductService,
    private router:Router) { }

  product;
  quantity;

  fetchProduct(id){
    this.productService.getProductById('/products',id).subscribe(data=>{
      console.log(data);
      this.product=data;
      this.quantity=this.product.quantity;
    });
  }

  async saveOrder(id){
    this.product.quantity=this.quantity;
    await this.productService.updateProduct('/products',id,this.product);
    console.log('to cart');
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.fetchProduct(id);
    });
  }

}
