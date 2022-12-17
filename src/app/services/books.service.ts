import { Injectable } from '@angular/core';
import {books} from "../data/books";
import {IBooks} from "../models/IBooks";
import {IBookDTO} from "../models/IBookDTO";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  book: IBooks | undefined;

  constructor() { }

  getBooks(): IBooks[] {
    return books;
  }

  // @ts-ignore
  getBooksById(id: number): IBooks {
    // @ts-ignore
    this.getBooks().forEach(book => {
      if (book.id === id) {
        this.book = book;
      }
    });
    return <IBooks>this.book;
  }

  addBook(book: IBookDTO) {
    let id: number = this.getBooks().length;
    let newBook: IBooks = {
      id: id + 1,
      nickName: book.nickName,
      title: book.title,
      description: book.description,
      img: book.img
    }
    books.push(newBook);
  }
}
