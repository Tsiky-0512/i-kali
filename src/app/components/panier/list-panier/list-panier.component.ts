import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';
import { PanierService } from 'src/app/service/panier.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.css']
})
export class ListPanierComponent implements OnInit {
  criteria: any;
  data: any = [];
  loading: boolean = false;
  constructor(
    private router: Router,
    private panierService:PanierService,
    private tools:ToolsService,
    private commandeService:CommandeService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("panier")) {
      this.data = JSON.parse("" + localStorage.getItem('panier'));
      console.log(this.data);
    }
  }

  camelize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  toMoney(number: number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + " Ar";
  }

  criteriaToogle() {
    this.criteria?.nativeElement.classList.toggle('criteria-show');
  }

  toFiche(data: any) {
    this.router.navigate(['/restaurant/fiche', JSON.stringify(data)]);
  }

  delete(index:any){
    this.data.splice(index, 1);
    this.panierService.setPanier(JSON.stringify(this.data));
  }

  commander(){
    const success = (response:any)=>{
      if (response.status == 200) {
        localStorage.setItem('panier',JSON.stringify([]));
        this.data = [];
        this.router.navigate(['/client/liste-commande']);
        this.tools.openSnackBar("Commande effectuée","OK");
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log(response);
      this.tools.openSnackBar("Erreur durant la commande","OK");
      this.loading = false;
    }
    this.loading = true;  
    this.commandeService.insertCommade({
      data:this.data
    }).subscribe(success,error);
  }


}
