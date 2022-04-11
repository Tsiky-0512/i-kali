import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPanierComponent } from '../panier/modal-panier/modal-panier.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data:any = {};
    
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  camelize(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  toMoney(number:number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + " Ar";
  }

  openDialog(data:any){
    const dialogRef = this.dialog.open(ModalPanierComponent, {
      width: '60%',
      data: data,
    });

  }

}
