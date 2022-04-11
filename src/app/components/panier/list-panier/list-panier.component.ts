import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/service/panier.service';

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
    private panierService:PanierService
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


}
