import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginSection: boolean = true;
  email: string = '';
  password: string = '';

  // this is to show the loading spinner if login or signup button is pressed and request is sent to backend
  processing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showSignUp = () => {
    if (!this.isLoginSection) return;
    this.isLoginSection = false;
  };

  showLogin = () => {
    if (this.isLoginSection) return;
    this.isLoginSection = true;
  };

  // go to main landing page when it is clicked
  handleCloseButtonClicked = () => {
    console.log('clicked close button');
  };

  emailChanged = (value: any) => {
    this.email = value;
  };
  passwordChanged = (value: any) => {
    this.password = value;
  };

  handleSubmitButtonClicked = () => {
    this.processing = true;
    if (this.isLoginSection) {
      // proceed with login.
      // remember to set this.processing to false if error occurred
    } else {
      // proceed with signup.
      // remember to set this.processing to false if error occurred
    }
  };
}
