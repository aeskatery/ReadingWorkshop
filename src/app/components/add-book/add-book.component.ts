import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  image: File | undefined;
  imagePreview: string | ArrayBuffer | null = '';
  isLoggedIn: boolean = false;
  @ViewChild('upload') inputRef: ElementRef | undefined
  constructor(private bookService: BooksService) { }

  addBook() {
    this.bookService.addBook(this.BookDto)
    console.log(this.BookDto)
  }

  triggerClick() {
    this.inputRef?.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file;

    const reader = new FileReader()

    reader.onload = () => {
      this.imagePreview = reader.result
      // console.log(this.imagePreview)
    }
    reader.readAsDataURL(file)
    let title = this.BookDto.title
    this.bookService.addCoverFile(file, title)
  }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.length !== 0;
    // @ts-ignore
    this.username = sessionStorage.key(0);
  }

}
