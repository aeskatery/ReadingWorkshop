import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";
import {IBooks} from "../../models/IBooks";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../models/IUsers";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookDetail: IBooks = {
    id : 0,
    nickName: 'нет имени',
    title : 'Книга не найдена',
    description : 'нет описания',
    img : 'нет картинки'
  };

  user: IUsers | undefined;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private bookService: BooksService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.getBook();
    this.getCurrentUser(); // пока получаем первого пользователя из sessionStorage
  }

  // @ts-ignore
  getBook(): void{
    // @ts-ignore
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    this.bookDetail =  this.bookService.getBooksById(id);
  }

  addBookToBookmarksUser(): void {
    this.user?.attributes.bookmarks.push(this.bookDetail.title)
    // @ts-ignore
    this.usersService.saveUser(this.user)
  }

  addBookToFavoritesUser(): void {
    this.user?.attributes.favorites.push(this.bookDetail.title)
    // @ts-ignore
    this.usersService.saveUser(this.user)
  }

  // @ts-ignore
  getCurrentUser(): IUsers {
    let nickname = sessionStorage.key(0);
    this.user = this.usersService.getUserByNickname(nickname);
  }
}
