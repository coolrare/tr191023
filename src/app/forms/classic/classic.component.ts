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

      profiles: this.fb.array([
      ])
    });

    this.addProfile('user1@example.com', '0922-222222');
    this.addProfile('user2@example.com', '0944-444444');

  }

  addProfile(email: string, tel: string) {
    const profiles = this.form.get('profiles') as FormArray;

    const group = this.fb.group({
      email: [email, [
          Validators.required,
          Validators.email
        ]
      ],
      tel: this.fb.control(tel, [
        Validators.pattern('\\d{4}-\\d{6}')
      ])
    });

    profiles.push(group);
  }

}
