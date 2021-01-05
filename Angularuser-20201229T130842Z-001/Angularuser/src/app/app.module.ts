import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailComponent } from './userdetails/user-detail/user-detail.component';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserDetailService } from './shared/user-detail.service';
import{ FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './login/userhome/userhome.component';
import { UserUpdateComponent } from './user-update/user-update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailComponent,
    UserDetailsListComponent,
    LoginComponent,
    UserhomeComponent,
    UserUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
