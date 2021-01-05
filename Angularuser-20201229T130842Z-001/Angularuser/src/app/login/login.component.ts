import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../shared/user-detail.model';
import { UserDetailService } from '../shared/user-detail.service';
import { UserDetailsListComponent } from '../user-details-list/user-details-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit { 

 

  constructor(public service: UserDetailService, private router:Router, private toastr:ToastrService) {
  }
  
   num:number;
   public showModal:boolean=false;
  ngOnInit(): void {   
    this.service.refreshList();
  }

  onSubmit(form: NgForm){
    this.num=0;
    if(this.service.user=="admin123"&&this.service.pass=="admin123")
    {
      this.num=1;
      this.router.navigateByUrl('/user-details');}
    else{
    for(let ud of this.service.list){
      if(this.service.user==ud.username&&this.service.pass==ud.password)
        {  this.num =ud.userid;
          this.router.navigateByUrl('/login/userhome');
       break;}
       
      }}
      if(this.num==0)
      this.toastr.warning('Invalid Username or Password','User Registration Portal');
    
      
}

populateForm(selectedRecord: UserDetail){
  this.service.formData = Object.assign({},selectedRecord);
}
}
