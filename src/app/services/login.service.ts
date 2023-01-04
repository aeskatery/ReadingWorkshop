import { Injectable } from '@angular/core';
import {IUsers} from "../models/IUsers";
import {Router} from "@angular/router";
import {IUsersDTO} from "../models/IUserDTO";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: IUsers | undefined;

  constructor(private router: Router) { }

  loginUser(userDTO: IUsersDTO) {
    let email = userDTO.email
    //@ts-ignore
    if(localStorage.getItem(email) === null) {
      alert("Пользователь не найден")
      this.router.navigate(['register'])
    }
    else {
      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem(email));
      let password = userDTO.password
      // @ts-ignore
      if (password !== this.user?.password) {
        alert("Неправильный логин или пароль ")
        this.router.navigate(['login'])
      } else {
        // @ts-ignore
        sessionStorage.setItem(this.user.nickName, JSON.stringify(this.user))
        this.router.navigate(['users', this.user.nickName]);
      }
    }
  }
}
