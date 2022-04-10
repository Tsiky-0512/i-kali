import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-panier',
  templateUrl: './modal-panier.component.html',
  styleUrls: ['./modal-panier.component.css']
})
export class ModalPanierComponent implements OnInit {
  loading:boolean = false;

  
  constructor(
    public dialogRef: MatDialogRef<ModalPanierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

}
