import { Component, OnInit } from '@angular/core';
import { IBookDTO } from "../../models/IBookDTO";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  BookDto: IBookDTO = {
    nickName: '',
    title: '',
    description: '',
    img: ''
  };
  constructor(private bookService: BooksService) { }

  addBook() {
    this.bookService.addBook(this.BookDto)
  }

  ngOnInit(): void {
  }

}
