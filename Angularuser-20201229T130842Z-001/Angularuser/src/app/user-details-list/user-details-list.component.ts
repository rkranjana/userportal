import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../shared/user-detail.model';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styles: [
  ]
})
export class UserDetailsListComponent implements OnInit {

  constructor(public service: UserDetailService,
    private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onClick(){
    this.router.navigateByUrl('/login');
  }

  populateForm(selectedRecord: UserDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteUserDetail(id)
      .subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully', 'User Registration Portal');
      },
      err => {
        console.log(err);
      }
      )
    }
  }

}
