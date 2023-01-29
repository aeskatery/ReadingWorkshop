import { Injectable } from '@angular/core';
import { IBooks } from "../models/IBooks";
import { IBookDTO } from "../models/IBookDTO";
import { HttpClient } from "@angular/common/http";
import {map, Observable } from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BooksService  {
  dbUrl = 'https://reading-workshop-default-rtdb.europe-west1.firebasedatabase.app'

  book: IBooks | undefined;

  books: IBooks[] = []

  constructor(private httpClient: HttpClient, private router: Router) {}

  getBooks(): IBooks[] {
    // @ts-ignore
    return this.books;
  }

  getBooksFromDb(): Observable<IBookDTO> {
    // @ts-ignore
    return this.httpClient.get<IBookDTO>(this.dbUrl + '/listBooks.json')
      .pipe(map((res: {[key: string]:any}) => {
        return Object
          .keys(res)
          // @ts-ignore
          .map(key => ({
            ...res[key],
            id: key
          }))
      }))
  }

  getBooksById(id: string): Observable<IBookDTO> {
    console.log('ищем книгу по ид ' + id)
    // @ts-ignore
    return this.httpClient.get<IBookDTO>(this.dbUrl + '/listBooks/' + id + '.json')
      .pipe(map((book) => {
        return {...book, id}
      }))
  }


  addBook(book: IBookDTO) {
    // @ts-ignore
    this.addBookToFirebase(book).subscribe(()=>{
      this.router.navigate(['books'])
    })
  }

  // @ts-ignore
  addBookToFirebase(b: IBookDTO) : Observable<IBookDTO> {
    console.log('Load book to base ' + this.dbUrl)
    // @ts-ignore
    return this.httpClient.post<IBooks>(this.dbUrl + '/listBooks.json', b)
  }
}
