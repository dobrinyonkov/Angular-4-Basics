import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../../auth.service";
import { AuthUser } from "../../auth-user.model";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit, OnDestroy {

  loginError: string;
  request: Subscription;
  tryingToLogIn: boolean;

  constructor(public loginValidationBar: MdSnackBar,
              private router: Router,
              private auth: AuthService) {
    this.auth.logout();
  }

  login(user : AuthUser) {
    this.tryingToLogIn = true;
    if (this.request) {
      this.request.unsubscribe();
    }
    this.request = this.auth
      .login(user.email, user.password)
      .delay(1000)
      .subscribe(
        //Is the data
        (lUser) => {
          if (lUser) {
            this.loginError = null;
            this.router.navigate(['/']).then(() => {
              this.loginValidationBar.open("You are logged in", "Ok", {
                duration: 3000,
              });
            });
          } else {
            this.loginError = "username and password was wrong";
          }
        },
        //Error handling
        (err) => {
          console.error(err);
          this.loginError = "An error occoured during login, see error in console";
          this.tryingToLogIn = false;
        },
        //Observable Done
        () => {
          console.log("Done!");
          this.tryingToLogIn = false;
        }
      );


  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if (this.request) {
      this.request.unsubscribe();
    }
  }

}