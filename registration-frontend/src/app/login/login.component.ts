import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  
  loginForm!:FormGroup;

  ngOnInit():void{
    this.setForm();
  }


  constructor(
    private router:Router,
    private _login:LoginService
  )
    { }


  setForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      
    })
  }

  submit(){
  
    if(this.loginForm.valid){

      this._login.loginUser(this.loginForm.value).subscribe({next:(resp:any)=>{
        console.log(resp);
        if (resp.role === 'admin'){
          this.router.navigate(['admin-dashboard']);
        }
        else if (resp.role === 'student'){
          this.router.navigate(['dashboard']);
        }
        else{
          alert("Try again!");
        }
        // this.router.navigate(['dashboard']).then(()=>{
        //   alert("Login Successfull")
          
        // })
      },error:(err)=>{
        console.log(err);
      }})

    }

  }

}

