import { Component } from '@angular/core';
import { stdformService } from '../services/stdform.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  constructor(
    
    private _sform: stdformService
  ) { }

  ngOnInit(){
    this.getFormDetail();
  }

  stdformList:any=[];
  getFormDetail(){

    this._sform.getForm().subscribe({next:(resp)=>{
    this.stdformList=resp;

    },error:(err)=>{
      console.log(err);
    }

  })
  }
  
}
