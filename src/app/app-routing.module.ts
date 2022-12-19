import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BooksComponent} from "./components/books/books.component";
import {AboutComponent} from "./components/about/about.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {BookComponent} from "./components/book/book.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:id', component:BookComponent},
  {path: 'add_book', component:AddBookComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
