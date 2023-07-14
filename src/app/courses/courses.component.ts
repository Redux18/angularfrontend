import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(){}

  course= [
    {'id':1,'name':'Learn Angular','description':'lorem shhsuj hudhish oishdsuh ahsduhau uashdua uasudhdau uhasudhas','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn TypeScript','description':'lorem shhsuj hudhish oishdsuh ahsduhau uashdua uasudhdau uhasudhas','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'lorem shhsuj hudhish oishdsuh ahsduhau uashdua uasudhdau uhasudhas','image':'../../assets/nodejs.jpg'},
  
    {'id':4,'name':'Learn Reactjs','description':'lorem shhsuj hudhish oishdsuh ahsduhau uashdua uasudhdau uhasudhas','image':'../../assets/reactjs.jpg'},
  
  ]

}
