import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-handler',
  templateUrl: './router-handler.component.html',
  styleUrls: ['./router-handler.component.css']
})
export class RouterHandlerComponent implements OnInit {
  user:any = JSON.parse(""+localStorage.getItem("user"));
  token:any = localStorage.getItem("token");
  constructor(private router:Router) { }

  ngOnInit(): void {
    if (this.user && this.token) {
      
      if (this.user.role == "client") {
        console.log("huhu");
        
        this.router.navigate(['client'])
      }
      if (this.user.role == "livreur") {
        this.router.navigate(['/livreur'])
      }
      if (this.user.role == "restaurant") {
        this.router.navigate(['/restaurant'])
      }
      if (this.user.role == "admin") {
        this.router.navigate(['/admin'])
      }
      return;
    }
    this.router.navigate(['/']);
  }
}
