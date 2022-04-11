import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panierOserver = new Subject<string>();

  constructor() { }

  isPanierObserver(): Observable<string> {
    return this.panierOserver.asObservable();
  }

  setPanier(panier:string){
    localStorage.setItem('panier',panier);
    this.panierOserver.next(panier);
  }
}
