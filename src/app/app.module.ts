import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {BooksService} from "./services/books.service";
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookComponent } from './components/book/book.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AboutComponent,
    NotfoundComponent,
    AddBookComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    LogoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [BooksService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule { }
