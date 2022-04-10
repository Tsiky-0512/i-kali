import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulaire_Control:any;
  data:any = {};
  loading:boolean = false;


  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private tools:ToolsService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.formulaire_Control = this.formBuilder.group({
      email: [this.data.email, [Validators.email,Validators.required,Validators.pattern('.+\\.[a-z]{2,}$')]],
      password : [this.data.password ,[Validators.required]]
    }); 
  }

  redirectToSign(){
    this.router.navigate(['/inscription'])
  }


  controlValue(){
    
    if(!this.formulaire_Control.valid){
      this.tools.openSnackBar("Completer respectivement votre donée","OK");
      return ;
    }
    else{
      this.getDataFromControl();
      this.login();
    }
  }

  getDataFromControl(){
    this.data.email = this.formulaire_Control.get('email').value ; 
    this.data.password = this.formulaire_Control.get('password').value ; 
  }

  login(){
    this.loading = true;
    const success = (response:any) =>{
      if (response.status == 200) {
        this.tools.setUser(response);
        this.router.navigate(['/routerHandler']); 
      }
      this.loading = false;
    }

    const error = (response:any) =>{
      console.log(response);
      this.tools.openSnackBar("Erreur d'inscription","OK");
      this.loading = false;
    }

    this.authService.login(this.data).subscribe(success,error);
  }

}
