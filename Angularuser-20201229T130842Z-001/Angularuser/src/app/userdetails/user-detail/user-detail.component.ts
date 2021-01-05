import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {

  constructor(public service: UserDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      userid:0,
      username: '',
      password: '',
      fullname: '',
      emailid: ''

    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.userid==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
   
  }

  insertRecord(form:NgForm){
    this.service.postUserDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Registered Successfully', 'User Registration Portal');
      this.service.refreshList();

    },
    err => {
      console.log(err);
    }
  )
  }
  updateRecord(form:NgForm){
    this.service.putUserDetail().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Updated Successfully', 'User Registration Portal');
      this.service.refreshList();

    },
    err => {
      console.log(err);
    }
  )
  }


}
