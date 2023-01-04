import { Injectable } from '@angular/core';
import {IUsers} from "../models/IUsers";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user: IUsers | undefined
  errorMessage: string = "error"

  constructor(private router: Router) { }

  // @ts-ignore
  registerUser(newUser: IUsers) {
    if(localStorage.getItem(newUser.email) != null) {
      alert("Пользователь с почтой - " + newUser.email + " уже зарегистрирован")
      this.router.navigate(['register']);
    } else {
      localStorage.setItem(newUser.email, JSON.stringify(newUser));
      this.router.navigate(['', newUser.nickName])
    }
  }
}
