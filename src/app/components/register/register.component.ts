import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/IUsers';
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IUsers= {
    username: '',
    userSurname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
    nickName: '',
    img: '',
    desc: ''
  };

  constructor(private registerService: RegisterService) { }

  submitRegister() {
    console.log(this.user)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.registerUser(this.user)
  }

}
