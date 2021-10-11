import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  search="";
  constructor() { }

  ngOnInit(): void {
  }

  somethingChanged(){
    console.log("ASD");
    console.log(this.search);
  }

}
