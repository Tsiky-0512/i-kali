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

  


  ajouterPanier(){
    let panier = [];
    const cookie = localStorage.getItem('panier');

    if(cookie != null){
      console.log("huhu");
      
      panier = JSON.parse(cookie);
    } 
    const userLocal = JSON.parse(""+localStorage.getItem('user'));
    panier.push({
      plat_id:this.data._id,
      qte:this.qte,
      montant:this.montant,
      lieudelivraison:this.lieu,
      user_id:userLocal._id,
      ...this.data
    });   
    this.panierService.setPanier(JSON.stringify(panier));
    this.dialogRef.close();
  }
}
