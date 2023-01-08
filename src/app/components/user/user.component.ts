import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../models/IUsers";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nick: string | null = '';
  userDetail: IUsers = {
    username: '',
    userSurname: '',
    email: '',
    nickName: '',
    birthday: '',
    gender: '',
    password: '',
    confirmPassword: '',
    img: '',
    desc: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.nick = params.get('nickname');
    });

    this.userDetail = this.usersService.getUserByNickname(this.nick)
  }

  editUser(): void {

  }
}
