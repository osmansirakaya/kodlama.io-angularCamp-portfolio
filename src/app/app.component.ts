import { FirebaseService } from './services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { GetUserData } from './models/getUserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public firebaseService:FirebaseService) {
   
   }

  ngOnInit(): void {
    this.firebaseService.getUser('osman');
  }
  title = 'cv';
}
