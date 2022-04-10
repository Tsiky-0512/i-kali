import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  @ViewChild("criteria") criteria?:ElementRef ;
  data:any;
  loading:boolean = false;
  constructor(
    private tools:ToolsService,
    private platService:PlatService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listePlat();
  }

  criteriaToogle() {
      this.criteria?.nativeElement.classList.toggle('criteria-show');
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
    console.log(this.data);
    
    this.platService.listePlat(this.data).subscribe(success,error);
  }

  camelize(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  toMoney(number:number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + " Ar";
  }

  toFiche(data:any){
    this.router.navigate(['/restaurant/fiche',JSON.stringify(data)]);
  }

}
