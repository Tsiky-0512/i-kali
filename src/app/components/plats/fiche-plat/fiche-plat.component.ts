import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-fiche-plat',
  templateUrl: './fiche-plat.component.html',
  styleUrls: ['./fiche-plat.component.css']
})
export class FichePlatComponent implements OnInit {
  loading:boolean = false;
  data:any = []
  constructor(
    private platService:PlatService,
    private tools:ToolsService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.getParam();
  }

  async getParam(){
    await this.route.params.subscribe(params => {
        this.data = JSON.parse(params['data']);
    });
  }

  modifier(){
    this.router.navigate(['/restaurant/update',JSON.stringify(this.data)])
  }

  supprimer(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.tools.openSnackBar("Plats supprimé","OK");
        this.router.navigate(['/restaurant']);        
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur durant la suppression plats","OK");
      this.loading = false;
    }
    this.loading = true;
    console.log(this.data._id);
    
    this.platService.deletePlat(this.data._id).subscribe(success,error);
  }


  listPlat(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.data = response.data[0];
        console.log(this.data);
        
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur durant liste plats","OK");
      this.loading = false;
    }
    this.loading = true;
    
    this.platService.listePlat({_id:null}).subscribe(success,error);
  }

  
}
