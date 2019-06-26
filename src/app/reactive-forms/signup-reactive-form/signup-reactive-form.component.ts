import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from './../../models/user';

@Component({
  selector: 'app-signup-reactive-form',
  templateUrl: './signup-reactive-form.component.html',
  styleUrls: ['./signup-reactive-form.component.css']
})
export class SignupReactiveFormComponent implements OnInit {
  countries: Array<string> = ['Ukraine', 'Armenia', 'Belarus', 'Hungary', 'Kazakhstan', 'Poland', 'Russia'];
  user: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   // this.createForm();
   //this.setFormValues();
   // this.patchFormValues();
   this.buildForm();
  }

  onSave() {
    // Form model
    console.log(this.userForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.userForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.userForm.getRawValue())}`);
  }

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: {value: 'Zhyrytskyy', disabled: true},
      email: [''],
      sendProducts: true
    });
  }

  private createForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendProducts: new FormControl(true)
    });
  }

  private setFormValues() {
    this.userForm.setValue({
      firstName: 'Sergey',
      lastName: 'Dziadevich',
      email: 'sergey_dziadevich@epam.com',
      sendProducts: false
    });
  }

  private patchFormValues() {
    this.userForm.patchValue({
      firstName: 'Sergey',
      lastName: 'Dziadevich'
    });
  }

}
