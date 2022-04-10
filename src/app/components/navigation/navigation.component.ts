import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild("nav") nav?:ElementRef;

  constructor(
    private tools:ToolsService,
    private router:Router
  ) { }

  
  menuToogle() {
      this.nav?.nativeElement.classList.toggle('nav-hide');
      console.log(this.nav);
      
  }

  ngOnInit(): void {
  }

  logOut(){
    this.tools.logOut();
    this.router.navigate(['/router-handler']);
  }

}
