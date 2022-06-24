import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  users=GetUserData;
  constructor() { }

  ngOnInit(): void {
  }

}
