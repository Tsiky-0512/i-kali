import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  formulaire_Control : any; 
  data:any = {};
  loading:boolean = false;
  constructor(
    private platService:PlatService,
    private formBuilder: FormBuilder,
    private tools:ToolsService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
  }

  async getParam(){
    await this.route.params.subscribe(params => {
        this.data = JSON.parse(params['data']);
    });
  }

  ngOnInit(): void {
    this.getParam();
    this.formulaire_Control = this.formBuilder.group({
      nom:[this.data.nom,Validators.required],
      categorie:[this.data.categorie,Validators.required],
      prix: [this.data.prix, [Validators.required,Validators.min(0)]],
      visibilite:['1',[Validators.required]]
    });
  }

  controlValue(){
    if(!this.formulaire_Control.valid){
      this.tools.openSnackBar("Completer respectivement votre donée","OK");
      return ;
    }
    else{
        this.getDataFromControl();
        this.modifierPlat(); 
    }
  }

  getDataFromControl(){
    this.data.nom = this.formulaire_Control.get('nom').value ; 
    this.data.categorie = this.formulaire_Control.get('categorie').value ; 
    this.data.prix = this.formulaire_Control.get('prix').value ; 
    this.data.visibilite = this.formulaire_Control.get('visibilite').value ; 
  }

  modifierPlat(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.tools.openSnackBar("Plats modifier","OK");
        console.log(response);
        
        console.log(JSON.stringify(response.data));
        
        this.router.navigate(['/restaurant/fiche',JSON.stringify(response.data)])
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur d'inscription","OK");
      this.loading = false;
    }
    this.loading = true;
    console.log(this.data);
    
    this.platService.updatePlat(this.data).subscribe(success,error);
  }

}
