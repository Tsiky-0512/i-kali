import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild("nav") nav?:ElementRef;

  constructor() { }

  
  menuToogle() {
      this.nav?.nativeElement.classList.toggle('nav-hide');
      console.log(this.nav);
      
  }

  ngOnInit(): void {
  }

}
