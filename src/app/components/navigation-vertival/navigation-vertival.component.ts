import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-navigation-vertival',
  templateUrl: './navigation-vertival.component.html',
  styleUrls: ['./navigation-vertival.component.css']
})
export class NavigationVertivalComponent implements OnInit,AfterViewInit {
  @Input() menu:any ;
  @ViewChild("nav") nav?:ElementRef;

  constructor(
    private tools:ToolsService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.generateCollapse();
  }

  generateCollapse(){
    const collapsible = document.getElementsByClassName("collapsible");
    if(collapsible.length == 0) return;
    for (let index = 0; index < collapsible.length; index++) {
      collapsible[index].addEventListener("click", function() {
        const content = collapsible[index].nextElementSibling;
        content?.classList.toggle("sub-nav-show");
      });
    }
  }

  menuToogle() {
    this.nav?.nativeElement.classList.toggle('nav-hide');  
  }

  logOut(){
    console.log("deco");
    
    this.tools.logOut();
    this.router.navigate(['/routerHandler']);
  }



}
