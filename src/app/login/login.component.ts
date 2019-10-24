import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: Send AJAX
      console.log(form.value);
    }
  }

}
