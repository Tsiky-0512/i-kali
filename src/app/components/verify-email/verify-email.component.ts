import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  @Input() email?:string;
  formulaire_Control : any; 
  data:any = {};
  loading:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private tools:ToolsService,
    private router:Router
  ) { 
    
  
  }


  ngOnInit(): void {
    console.log(this.email);
    this.formulaire_Control = this.formBuilder.group({
      email: [this.email, [Validators.email,Validators.required,Validators.pattern('.+\\.[a-z]{2,}$')]],
      code : [this.data.code ,[Validators.required]]
    }); 
    
  }

  controlValue(){
    if(!this.formulaire_Control.valid){
      this.tools.openSnackBar("Completer respectivement votre donée","OK");
      return ;
    }
    else{
      this.getDataFromControl();
      this.verifyEmail();
    }
  }

  getDataFromControl(){
    this.data.email = this.formulaire_Control.get('email').value ; 
    this.data.code = this.formulaire_Control.get('code').value ; 
  }

  verifyEmail(){
    this.loading = true;
    const success = (response:any) =>{
        
      console.log("success...");
      console.log(response);
      
        if (response.status == 200) {
          this.tools.setUser(response);
          this.router.navigate(['routerHandler']); 
        }
        this.loading = false;
    }

    const error = (response:any) =>{
      console.log(response);
      this.tools.openSnackBar("Erreur de validation, Veuillez ressayer","OK");
      this.loading = false;
    }

    this.authService.validation(this.data).subscribe(success,error);
  }

}
