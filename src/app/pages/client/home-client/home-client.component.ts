import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPanierComponent } from 'src/app/components/modal-panier/modal-panier.component';
import { PlatService } from 'src/app/service/plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  data:any;
  filtre:any;
  loading:boolean = false;

  constructor(
    private tools:ToolsService,
    private platService:PlatService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.listePlat();
  }

  listePlat(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.data = response.data;
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      this.tools.openSnackBar("Erreur durant la liste","OK");
      this.loading = false;
    }
    this.loading = true;
    
    this.platService.listComplet(this.filtre).subscribe(success,error);
  }

 

}
