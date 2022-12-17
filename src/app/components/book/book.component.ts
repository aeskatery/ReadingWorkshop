import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";
import {IBooks} from "../../models/IBooks";

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

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBook();
  }

  // @ts-ignore
  getBook(): void{
    // @ts-ignore
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    this.bookDetail =  this.bookService.getBooksById(id);
  }

}
