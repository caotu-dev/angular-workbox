import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm! : FormGroup;
  submitted: boolean = false;

  constructor(
    private fb : FormBuilder,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['', Validators.compose([Validators.required])],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      age : ['', Validators.compose([Validators.required, Validators.min(0)])]
    })
  }

  register(): void {
    this.submitted = true;
    if(this.registerForm.valid) {
      const formValue = this.registerForm.value;
      this.userService.register(formValue).subscribe({
        next : (res) => {
          console.log(res);
        },
        error : (err) => {
          console.log(err)
        }
      })
    }
  }

  get rform() {
    return this.registerForm.controls;
  }
}
