import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import {HttpClient} from "@angular/common/http"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  formData : UserDetail
  readonly rootURL = 'https://localhost:44303/api/UserDetails';
  list : UserDetail[];
  listuser : UserDetail[];
  user: string;
  pass: string;
  

  constructor(private http: HttpClient) { }

  postUserDetail(){
    return this.http.post(this.rootURL,this.formData);

  }

  putUserDetail(){
    return this.http.put(`${this.rootURL}/${this.formData.userid}`,this.formData);

  }

  


  deleteUserDetail(id:number){
    return this.http.delete(`${this.rootURL}/${id}`);

  }



  refreshList(){
    this.http.get(this.rootURL)
    .toPromise()
    .then(res => this.list = res as UserDetail[]);
  }


   
}
