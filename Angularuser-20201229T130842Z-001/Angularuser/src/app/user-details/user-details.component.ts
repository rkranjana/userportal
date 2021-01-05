import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles:[]
})
export class UserDetailsComponent implements OnInit {

  constructor(private router:Router) { }
  
  public showModal:boolean=false;
  ngOnInit(): void {
  }
 
 
}
