import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  iCount:number;
 
  gText:string;

  goals = [];
  constructor() { 
    
  }

  ngOnInit() {
    this.iCount = this.goals.length;
  }

addItems(){
  this.goals.push(this.gText);
  this.gText='';
  this.iCount=this.goals.length;

}

removeIt(i){
  this.goals.splice(i,1);
}

}
