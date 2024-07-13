import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class stdformService {
  
  url="http://localhost:1101/sform";
  
  constructor(private http:HttpClient){ }

  sformUser(data:any){
    return this.http.post(this.url, data)
  }

  getForm(){
    return this.http.get(this.url)
  }
}
