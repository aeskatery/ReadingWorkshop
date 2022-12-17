import { Component, OnInit } from '@angular/core';
import { IBooks } from "../../models/IBooks";
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: IBooks[] = [];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

}
