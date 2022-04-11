import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  data:any = [];
  loading:boolean = false;
  criteria:any;
  somme:number = 0;
  constructor(
    private router:Router,
    private commandeService:CommandeService,
    private tools:ToolsService
  ) { }

  ngOnInit(): void {
    this.initCommande();
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

  initCommande(){
    const success = (response:any)=>{
      if (response.status == 200) {
        this.data = response.data;
        console.log(this.data);
        
      }
      this.loading = false;
    }

    const error = (response:any)=>{
      console.log("error");
      
      this.tools.openSnackBar("Erreur durant la liste","OK");
      this.loading = false;
    }
    this.loading = true;
    console.log("huhu");
    
    this.commandeService.listeCommande().subscribe(success,error);
  }
}
