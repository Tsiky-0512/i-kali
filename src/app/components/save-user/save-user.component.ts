import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  formulaire_Control : any; 
  data:any = {};
  loading:boolean = false;
  @Output() next:EventEmitter<number> =   new EventEmitter();
  @Output() result:EventEmitter<string> =   new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private tools:ToolsService
  ) { 
    this.formulaire_Control = formBuilder.group({
      username:[this.data.username,Validators.required],
      contact:[this.data.contact,Validators.required],
      email: [this.data.email, [Validators.email,Validators.required,Validators.pattern('.+\\.[a-z]{2,}$')]],
      password : [this.data.password ,[Validators.required]]
    });
  }

  ngOnInit(): void { 
  }

  controlValue(){
    if(!this.formulaire_Control.valid){
      this.tools.openSnackBar("Completer respectivement votre donée","OK");
      return ;
    }
    else{
        this.getDataFromControl();
        this.inscription(); 
    }
  }

  getDataFromControl(){
    this.data.username = this.formulaire_Control.get('username').value ; 
    this.data.email = this.formulaire_Control.get('email').value ; 
    this.data.password = this.formulaire_Control.get('password').value ; 
    this.data.contact = this.formulaire_Control.get('contact').value ; 
  }

  inscription(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.next.emit(1);
        
        this.result.emit(""+this.data.email);
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur d'inscription","OK");
      this.loading = false;
    }
    this.loading = true;
    this.authService.inscription(this.data).subscribe(success,error);
  }

}
