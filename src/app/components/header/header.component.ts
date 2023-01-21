import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.length !== 0;
    // @ts-ignore
    this.username = sessionStorage.key(0);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['logout']);
  }

}
