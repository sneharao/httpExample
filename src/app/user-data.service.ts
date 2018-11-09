import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { providerDef } from '@angular/core/src/view';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/items');
  }

  updateProduct(prod) {
    return this.http.put('http://localhost:3000/items/'+prod.id, JSON.stringify(prod),httpOptions)
  }

  deleteProduct(id) {
   return this.http.delete('http://localhost:3000/items/'+id,httpOptions)
  }

  addProduct(prod){   
    console.log("product",JSON.stringify(prod));
     return this.http.post('http://localhost:3000/items', JSON.stringify(prod),httpOptions
   )
    
  }

}
