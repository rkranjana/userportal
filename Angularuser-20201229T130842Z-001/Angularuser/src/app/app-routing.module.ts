import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './login/userhome/userhome.component';

import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailComponent } from './userdetails/user-detail/user-detail.component';

const routes: Routes = [{path: '',redirectTo:'/login',pathMatch:'full'},
{
  path: 'login',component: LoginComponent,
children: [
  {path:'userhome', component: UserhomeComponent},
]},
{path: 'user-details',component: UserDetailsComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
