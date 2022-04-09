import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  formulaire_Control : any; 
  data:any = {};
  loading:boolean = false;
  constructor(private formBuilder: FormBuilder) { 
    this.formulaire_Control = formBuilder.group({
      nom:[this.data.nom,Validators.required],
      contact:[this.data.contact,Validators.required],
      email: [this.data.email, [Validators.email,Validators.required,Validators.pattern('.+\\.[a-z]{2,}$')]],
      password : [this.data.password ,[Validators.required]]
    });
  }

  ngOnInit(): void {
   
  }

}
