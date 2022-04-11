import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommandeService } from 'src/app/service/commande.service';
import { PanierService } from 'src/app/service/panier.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-modal-panier',
  templateUrl: './modal-panier.component.html',
  styleUrls: ['./modal-panier.component.css']
})
export class ModalPanierComponent implements OnInit {
  loading:boolean = false;
  qte:number = 0;
  montant:number = 0;
  lieu:string = '';


  
  constructor(
    public dialogRef: MatDialogRef<ModalPanierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tools:ToolsService,
    private commandeService:CommandeService,
    private panierService:PanierService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  change(){
     this.montant = this.qte*this.data.prix;
  }

  commander(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.tools.openSnackBar("Plats crée","OK");
        console.log(response);
        
        console.log(JSON.stringify(response.data));
        
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur d'inscription","OK");
      this.loading = false;
    }
    this.loading = true;
   
      const data = {
        plat_id:this.data._id,
        qte:this.qte,
        montant:this.montant,
        lieudelivraison:this.lieu,
        ...this.data
      } 
      
    console.log(data);
    
    this.commandeService.insertCommade(data).subscribe(success,error);
  }


  ajouterPanier(){
    let panier = [];
    const cookie = localStorage.getItem('panier');

    if(cookie != null){
      console.log("huhu");
      
      panier = JSON.parse(cookie);
    } 
    console.log({
      plat_id:this.data._id,
      qte:this.qte,
      montant:this.montant,
      lieudelivraison:this.lieu
    });
    
    panier.push({
      plat_id:this.data._id,
      qte:this.qte,
      montant:this.montant,
      lieudelivraison:this.lieu,
      ...this.data
    });   
    this.panierService.setPanier(JSON.stringify(panier));
    
  }
}
