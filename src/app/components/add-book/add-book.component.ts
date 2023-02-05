import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { IBookDTO } from "../../models/IBookDTO";
import {BooksService} from "../../services/books.service";
import {IBookContent} from "../../models/IBookContent";

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
    img: '',
    // @ts-ignore
    content: FileReader
  };
  bookContent: IBookContent | undefined
  imagePreview: string | ArrayBuffer | null = '';
  isLoggedIn: boolean = false;
  @ViewChild('upload') inputRef: ElementRef | undefined
  @ViewChild('uploadText') inputRefText: ElementRef | undefined
  constructor(private bookService: BooksService) { }

  addBook() {
    this.bookService.addBook(this.BookDto)
    console.log(this.BookDto)
  }

  triggerClick() {
    this.inputRef?.nativeElement.click()
  }

  triggerClickText() {
    this.inputRefText?.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]

    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      this.imagePreview = reader.result
      this.addImageToBook(reader.result)
    }
  }

  onFileUploadText(event: any) {
    const bookFile = event.target.files[0]

    const reader = new FileReader()
    reader.readAsText(bookFile)
    reader.onload = () => {
      // console.log(reader.result)
      // @ts-ignore
      this.BookDto.content = reader.result
    }

  }

  addContextToBook(content: string | ArrayBuffer | null) {
    if (typeof content === "string") {
      // @ts-ignore
      this.bookContent.text = content
    }
  }


  addImageToBook(pic: string | ArrayBuffer | null) {
    if (typeof pic === "string") {
      this.BookDto.img = pic
    }
  }
  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.length !== 0;
    // @ts-ignore
    this.username = sessionStorage.key(0);
  }

}
