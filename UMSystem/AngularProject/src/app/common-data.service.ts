import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CommonDataService {

  constructor(private http: HttpClient) { }

  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];


  myData() {
    return 'This is my data, man!';
  }

  GetData()
  {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }

  postDataApi()
  {
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
      );


  }

}
