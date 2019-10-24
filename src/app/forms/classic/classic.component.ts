import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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
      name: ['Will', [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      group1: this.fb.group({

        email: ['user@example.com', [
            Validators.required,
            Validators.email
          ]
        ],
        tel: this.fb.control('0944-444444', [
          Validators.pattern('\\d{4}-\\d{6}')
        ]),

      })

    });

  }

  fillDetails() {
    var details = this.form.get('details') as FormArray;

    details.push(this.fb.group({

    }));
  }

}
