import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  product;

  getProduct(urlPath){
    return this.http.get('http://localhost:3000'+urlPath);
  }

  getProductById(urlPath,id){
    return this.http.get('http://localhost:3000'+urlPath+'/'+id);
  }


  updateProduct(urlPath,id, product){
    this.http.put('http://localhost:3000'+urlPath+'/'+id, product).subscribe();
  }


}