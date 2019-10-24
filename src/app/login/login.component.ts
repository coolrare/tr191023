import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  login: any = {};

  @ViewChild('tPassword', { static: false }) tPassword: NgModel;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.tPassword);

    this.setDisabled(this.tPassword);
    this.cdr.detectChanges();
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
