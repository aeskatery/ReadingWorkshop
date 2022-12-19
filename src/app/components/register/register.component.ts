import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/IUsers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: IUsers= {
    username: '',
    userSurename: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
    nickName: ''
  };

  constructor() { }

  submitRegister() {
    console.log(this.user)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }

}
