import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  login: any = {};

  @ViewChild('tPassword', { static: false }) tPassword: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.tPassword);
    // setTimeout(() => {
    //   this.setDisabled(this.tPassword);
    // }, 1);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: Send AJAX
      console.log(form.value);
    }
  }

  setDisabled(ctl: NgModel) {
    ctl.control.disable();
  }

  setEnabled(ctl: NgModel) {
    ctl.control.enable();
  }

}
