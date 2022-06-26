import { Injectable } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { GetUserData } from '../models/getUserData';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public database:Database) { }

  getUser(userName: string){
    const startConfRef = ref(this.database, `user/${userName}`);
    onValue(startConfRef, (snapshot)=>{
      const data:User = snapshot.val();
      GetUserData.email=data.email;
      GetUserData.firstName=data.firstName;
      GetUserData.lastName=data.lastName;
      GetUserData.aboutMe=data.aboutMe;
      GetUserData.title=data.title;
      GetUserData.date=data.date;
      GetUserData.address=data.address;
      GetUserData.age=data.age;
      GetUserData.drivingLicense=data.drivingLicense;
      GetUserData.degree=data.degree;
      GetUserData.linkedin=data.linkedin;
      GetUserData.twitter=data.twitter;
      GetUserData.medium=data.medium;
      GetUserData.github=data.github;
      GetUserData.phone=data.phone;
      GetUserData.pp=data.pp;
      GetUserData.pp2=data.pp2;

    })
  }
}
