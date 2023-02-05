import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { IUsers } from 'src/app/models/IUsers';
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IUsers= {
    username: '',
    userSurname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
    nickName: '',
    img: '',
    desc: '',
    attributes: {
      myBooks: [''],
      bookmarks: [''],
      wantRead: [''],
      favorites: ['']
    }
  };
  imagePreview: string | ArrayBuffer | null = '';
  isLoggedIn: boolean = false;
  @ViewChild('upload') inputRef: ElementRef | undefined

  constructor(private registerService: RegisterService) { }

  submitRegister() {
    console.log(this.user)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.registerUser(this.user)
  }

  triggerClick() {
    this.inputRef?.nativeElement.click()
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

  addImageToBook(pic: string | ArrayBuffer | null) {
    if (typeof pic === "string") {
      this.user.img = pic
    }
  }

}
