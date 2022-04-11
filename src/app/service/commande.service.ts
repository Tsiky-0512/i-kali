import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(
    private http:HttpClient,
    private tools:ToolsService
  ) { }


  insertCommade(data:any){
    const options = this.tools.formOptionJSON(true);
    return this.http.post(api+'/commande/multiple',data,options);
  }


  listeCommande(){
    const options = this.tools.formOptionJSON(true);
    const data = {
      user_id:this.tools.getUser()._id
    }
    console.log(data);
    
    return this.http.post(api+'/commande/list',data,options)
  }
}
