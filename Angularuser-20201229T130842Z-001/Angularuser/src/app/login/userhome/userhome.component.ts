import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styles: [
  ]
})
export class UserhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onClick(){
  this.router.navigateByUrl('/login');
}
}
