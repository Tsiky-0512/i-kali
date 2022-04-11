import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  data:any;
  loading:boolean = false;
  criteria:any;
  constructor(
    private router:Router

  ) { }

  ngOnInit(): void {
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
}
