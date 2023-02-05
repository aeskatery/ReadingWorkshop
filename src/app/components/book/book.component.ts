import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";
import {IBooks} from "../../models/IBooks";
import {UsersService} from "../../services/users.service";
import {IUsers} from "../../models/IUsers";
import {IComment} from "../../models/IComment";
import {IBookDTO} from "../../models/IBookDTO";

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
    img : 'нет картинки',
  };
  idBook: string | null = ''
  user: IUsers | undefined;
  readBook = false;
  showAddComment = false;
  showCom = false;
  bookToUp: IBookDTO = {
    title: '',
    nickName: '',
    description: '',
    img: '',
    comments : []
  }
  comments: IComment = {
    textComment: '',
    nickname: '',
  }


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

  showComments(): void {
    this.showCom = !this.showCom
  }

  addComments(): void {
    this.showAddComment = !this.showAddComment
  }

  saveComment(): void {
    // @ts-ignore
    this.comments.nickname = this.user?.nickName
    this.comments.date = new Date()
    // @ts-ignore
    this.bookToUp.title = this.bookDetail.title
    this.bookToUp.nickName = this.bookDetail.nickName
    this.bookToUp.img = this.bookDetail.img
    this.bookToUp.description = this.bookDetail.description
    // @ts-ignore
    this.bookToUp.content = this.bookDetail.content
    const comment = this.bookDetail.comments
    console.log('Старые коменты')
    console.log(comment)
    const oldComment = this.bookDetail.comments?.length === undefined
    if (oldComment) {
      this.bookToUp.comments?.push(this.comments)
    } else {
      comment?.push(this.comments)
      // @ts-ignore
      this.bookToUp.comments = comment
      // this.bookToUp.comments?.push(comment)
    }
    this.bookService.updateBook(this.bookToUp, this.idBook)
  }

  // @ts-ignore
  getCurrentUser(): IUsers {
    let nickname = sessionStorage.key(0);
    this.user = this.usersService.getUserByNickname(nickname);
  }
}
