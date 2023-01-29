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
  idBook: string | null = ''
  user: IUsers | undefined;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private bookService: BooksService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.getBook();
    this.getCurrentUser(); // пока получаем первого пользователя из sessionStorage
  }

  // @ts-ignore
  getBook(): void {
    // @ts-ignore
    this.activatedRoute.paramMap.subscribe(params => {
      this.idBook = params.get('id')
    })
    // @ts-ignore
    this.bookService.getBooksById(this.idBook)
      .subscribe(book => {
        // @ts-ignore
        this.bookDetail = book;
      });
  }


  addBookToBookmarksUser(): void {
    // @ts-ignore
    this.user?.attributes.bookmarks.push(this.bookDetail.title)
    // @ts-ignore
    this.usersService.saveUser(this.user)
  }

  addBookToFavoritesUser(): void {
    // @ts-ignore
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
