import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: 'Will',
      email: 'user@example.com',
      tel: this.fb.control('0944-444444'),
      details: this.fb.array([
      ])
    });

  }

  fillDetails() {
    var details = this.form.get('details') as FormArray;

    details.push(this.fb.group({

    }));
  }

}
