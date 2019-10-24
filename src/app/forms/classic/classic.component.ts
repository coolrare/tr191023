import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ClassicModel } from 'src/app/entities/classic-model';

function forbidNameValidator(control: FormControl) {
  const value = control.value;
  if (value === 'will') {
    return { forbidName: true };
  } else {
    return null;
  }
}

function forbidNameAsyncValidator(control: FormControl) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const value = control.value;
      if (value === 'will') {
        resolve({ forbidName: true });
      } else {
        resolve(null);
      }
     }, 2000);
  });
}



@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  form: FormGroup;

  data: ClassicModel = {
    name: 'Will',
    profiles: [
      {
        email: 'user1@example.com',
        tel: '0922-222222'
      },
      {
        email: 'user2@example.com',
        tel: '0944-444444'
      },
      {
        email: '123@yam.com',
        tel: '3211-123123'
      }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', [
          Validators.required,
          Validators.minLength(2)
        ],
        [
          forbidNameAsyncValidator
        ]
      ],

      profiles: this.fb.array([
      ])
    });

    for (const key of this.data.profiles) {
      this.addProfile('', '');
    }

    this.form.reset(this.data);

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

  c(ctlName: string) {
    return this.form.get(ctlName);
  }

}
