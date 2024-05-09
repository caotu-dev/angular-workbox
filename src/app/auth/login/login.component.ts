import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted : boolean = false;

  constructor(
    private fb : FormBuilder,
    private userService : UserService
  ) {}

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email : ['', Validators.compose([Validators.required, Validators.email])],
        password : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
      })
  }

  get lForm () {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;
    if(this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.userService.login(formValue).subscribe({
        next : res => {
          console.log(res);
        },
        error : err => {
          console.log(err)
        }
      })
    }
  }
}
