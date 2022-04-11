import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrls: ['./home-restaurant.component.css']
})
export class HomeRestaurantComponent implements OnInit {
  menu:any = [
    {
      nom:'Plats',
      children:[
        {
          nom:'Saisie Plat',
          link:'/restaurant/saisie'
        },
        {
          nom:'Liste Plat',
          link:'/restaurant'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
