import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-pagingtest',
  templateUrl: './pagingtest.component.html',
  styleUrls: ['./pagingtest.component.css']
})
export class PagingtestComponent implements OnInit {
  page = 1;
  collectionSize=0;

  allProducts: any[] = [];

  constructor(private http: HttpClient) { 
    this.pageChanged(1);
  }
  ngOnInit(): void {

  }
  postService(url: string, bodyParam: any): Promise<any> {
    return this.http
        .post(url,bodyParam)
        .toPromise()
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  } 
  geturl() {
     let base = "http://localhost:8080/";
    return base;
  }

  pageChanged(e:any){
    var mov = {
      "discription": "string",
      "genere": "string",
      "id": "string",
      "image": "string",
      "language": "string",
      "link": "string",
      "name": "string",
      "page": e-1,
      "size": "string",
      "status": "string"
    }

   
    this.postService("http://localhost:8080/ViewMovies/",mov).then(res=>{
      if(res){

        this.allProducts= res.msg;
        console.log(this.allProducts.length);
        this.collectionSize = this.allProducts.length;
      }
    });
  }

}
