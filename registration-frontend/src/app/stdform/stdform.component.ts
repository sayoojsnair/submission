import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { stdformService } from '../services/stdform.service';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, ReactiveFormsModule,NgIf],
  templateUrl: './stdform.component.html',
  styleUrl: './stdform.component.css'
})
export class stdformComponent {

  stdform!: FormGroup;

  constructor(
    
    private _sform: stdformService
  ) { }


  ngOnInit(): void {
    this.setForm();
  }


  setForm() {
    this.stdform = new FormGroup({
      formName: new FormControl('', [Validators.required]),
      formPhoneno: new FormControl('', [Validators.required, Validators.minLength(10)]),
      formEmail: new FormControl('', [Validators.required, Validators.email]),
      formDob: new FormControl('', [Validators.required]),
      formBatch: new FormControl('', [Validators.required]),
      formGender: new FormControl('', [Validators.required])
    })
  }


  stdformList: any=[];

  submit() {
    console.log(this.stdform.value)
    console.log(this.stdform.valid)

    if (this.stdform.valid) {

      console.log(this.stdform.value)
      this._sform.sformUser(this.stdform.value).subscribe((data: any) => {
        console.log(data)

        this.stdform.disable();        
        alert(data.msg);
      })
    } else {
      alert("Please fill valid details")
    }
    this.stdformList.push(this.stdform.value)
    console.log("FormList :",this.stdformList);
  }

}
