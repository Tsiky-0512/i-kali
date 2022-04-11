import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  state:number = 0;
  email?:string ;
  constructor() { }

  ngOnInit(): void {
  }

  nextHandler(status:number){
    this.state = status;
  }

  resultHandler(email:string){
    this.email = email;
  }
  

}
