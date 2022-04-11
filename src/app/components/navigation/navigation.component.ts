import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { PanierService } from 'src/app/service/panier.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild("nav") nav?:ElementRef;
  badgePanier:number = 0;
  panierObservable?:Observable<string>;

  constructor(
    private tools:ToolsService,
    private router:Router,
    private panierService:PanierService
  ) { }

  
  menuToogle() {
      this.nav?.nativeElement.classList.toggle('nav-hide');
      console.log(this.nav);
  }

  initBadgePanier(pan:string){
      let panier = [];
      console.log(pan);
      if (pan != "null") {
        panier = JSON.parse(""+pan);      
      }
      this.badgePanier = panier.length; 
  }

  ngOnInit(): void {
    this.initBadgePanier(""+localStorage.getItem('panier'));
    this.panierService.isPanierObserver().subscribe((panier:string) => {
      this.initBadgePanier(panier)
    });
  }

  logOut(){
    this.tools.logOut();
    this.router.navigate(['/router-handler']);
  }

}
