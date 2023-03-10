import { Injectable } from '@angular/core';
import { books } from "../data/books";
import { IBooks } from "../models/IBooks";
import { IBookDTO } from "../models/IBookDTO";

@Injectable({
  providedIn: 'root'
})
export class BooksService  {
  book: IBooks | undefined;

  constructor() {}

  getBooks(): IBooks[] {
    return books;
  }

  getBooksById(id: number): IBooks | undefined {
    return this.getBooks().find(book => book.id === id);
  }

  addCoverFile(file: File | undefined, title: string) {
    // @ts-ignore
    console.log(file.name + title)
    localStorage.setItem('title', <string>file?.name)

  }

  addBook(book: IBookDTO) {
    let id: number = this.getBooks().length;
    let newBook: IBooks = {
      ...book,
      id: id + 1,
    }
    books.push(newBook);
  }
}
