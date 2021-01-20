import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants";
  rootUrl="http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getList()
  {
    return this.http.get(this.url);
  }

  saveResto(data)
  {
    //console.warn(data);
    return this.http.post(this.url,data);
  }

  deleteResto(item)
  {
    console.warn(item);
    return this.http.delete(`${this.url}/${item}`);
  }

  getCurrentResto(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  updateCurrentResto(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }

  registerResto(data)
  {
    return this.http.post(this.rootUrl+"users",data);
  }

  loginResto(data)
  {
    console.warn(data.email);
    
    return this.http.get(this.rootUrl+"users?email=",data.email);
  }
}
