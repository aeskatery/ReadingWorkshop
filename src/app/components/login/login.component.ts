import { Component, OnInit } from '@angular/core';
import { IUsersDTO } from 'src/app/models/IUserDTO';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDto: IUsersDTO = {
    email: '',
    password: ''
  };

  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  submitLogin() {
    // @ts-ignore
    this.loginService.loginUser(this.userDto);
  }
  logout() {
    // localStorage.clear();
    this.isLoggedIn = false;
  }
  ngOnInit(): void {
    // this.loginService.loginUser(this.userDto)
  }

}
