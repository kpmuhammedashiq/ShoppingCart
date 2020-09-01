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

}