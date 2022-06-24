import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  users=GetUserData;

  constructor() { }

  ngOnInit(): void {
  }

}
