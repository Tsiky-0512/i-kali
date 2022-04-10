import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(
    private http:HttpClient,
    private tools:ToolsService
  ) { }


  createPlat(data:any){
    const options = this.tools.formOptionJSON(true);
    console.log(options);
    
    return this.http.post(api+"/plat",data,options);
  }

  listePlat(data = {}){
    const options = this.tools.formOptionJSON(true);
    return this.http.post(api+"/plat/list",data,options);
  }

  updatePlat(data:any){
    const options = this.tools.formOptionJSON(true);
    return this.http.put(api+"/plat",data,options);
  }

  deletePlat(id:any){
    const options = this.tools.formOptionJSON(true);
    console.log(api+"/plat/"+id);
    
    return this.http.delete(api+"/plat/"+id,options);
  }


}
