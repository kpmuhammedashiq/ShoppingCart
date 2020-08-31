import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  getNews(){
    var url = 'http://localhost:3000/users';
    console.log('xcxj');
    this.http.get(url, {responseType: 'text'})
    .subscribe(
      data => {
        // Set the data to display in the template
        console.log(data);
        // this.data = data;
      }
    );
   
  }

  ngOnInit() {
      this.getNews();
    }
  
}
