import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ciao:string='nome implementato prima';

  formTable: FormGroup;

 
  
  constructor() { }

  ngOnInit(): void {
    this.formTable = new FormGroup({
      user: new FormGroup({
        userData: new FormGroup({
          nome: new FormControl(null, Validators.required),
          cognome: new FormControl(null, Validators.required),
          anni: new FormControl(null,[Validators.required]),
          paese: new FormControl(null, Validators.required)
        }),
        userCredenziali: new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, Validators.required),
          confermaPassword: new FormControl(null,[ Validators.required, ]),
          phone: new FormControl(null, [Validators.required, Validators.maxLength(10)])
        }),
      }),
    });
  }

  passwordConfirming(c: AbstractControl): {[invalid : string] : boolean} {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
    return null;
}

}
