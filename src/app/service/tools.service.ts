import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private _snackBar:MatSnackBar) { }

  formOptionJSON (use_authorization = false) {
      const options:any = {
          headers: {
              'Content-Type' : 'application/json'
          }
      };
      if (use_authorization) {
          options['headers']['token'] = localStorage.getItem('token');
      }
      return options;
  }

  setUser (data:any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user',JSON.stringify(data.user));
  }


  checkUserIsConnect(){
      if (localStorage.getItem('token')) {
          return true;
      }
      return false;
  }

  logOut(){
      localStorage.clear()
  }

  openSnackBar(message: string,undo:string) {
      let msg = "Actuamliser";
      if (undo.length>0) {
          msg = undo;
      }
      return this._snackBar.open(message, msg);
  }

}
