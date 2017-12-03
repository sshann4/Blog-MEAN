import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])],
      username: ['', Validators.required],
      passwoard: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  };

  onRegisterSubmit(){
    console.log('Form Submitted');
  }

  ngOnInit() {
  }

}
