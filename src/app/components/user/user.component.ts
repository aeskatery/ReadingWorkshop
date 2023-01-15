import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../models/IUsers";
import {IUserDetails} from "../../models/IUserDetails";

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
    desc: '',
    attributes: {
      myBooks: [''],
      bookmarks: [''],
      wantRead: [''],
      favorites: ['']
    }
  }

  userWithAttr: IUserDetails | undefined;

  isEdit = false;
  myBook = false;
  myBookmark = false;
  // myWantRead = false;
  myFavorites = false;

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
    this.isEdit = !this.isEdit;
  }

  saveUser(): void {
    this.isEdit = !this.isEdit;
    this.usersService.saveUser(this.userDetail)
  }

  cancelEdit(): void {
    this.isEdit = !this.isEdit;
  }

  seeMyBook(): void {
    this.myBook = !this.myBook
  }

  seeMyBookmark(): void {
    this.myBookmark = !this.myBookmark
  }

  // seeMyWantRead(): void {
  //   this.myWantRead = !this.myWantRead
  // }

  seeMyFavorites(): void {
    this.myFavorites = !this.myFavorites
  }
}
