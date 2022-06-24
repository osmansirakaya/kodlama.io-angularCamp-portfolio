import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users=GetUserData;
  constructor() { }
 

  ngOnInit(): void {
  }

}
