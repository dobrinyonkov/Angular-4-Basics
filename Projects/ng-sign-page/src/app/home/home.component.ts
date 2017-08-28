import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from "../users/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toolbarTitle = 'CP2';
  users: FirebaseListObservable<User[]>;;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.users = this.db.list('users');
  }

}
