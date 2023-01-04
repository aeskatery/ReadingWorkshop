import { Injectable } from '@angular/core';
import {IUsers} from "../models/IUsers";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // @ts-ignore
  getUserByNickname(nick: string | null): IUsers {
      // @ts-ignore
    return JSON.parse(sessionStorage.getItem(nick));
  }
}
