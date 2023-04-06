import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { ProductCard } from '../interfaces/Interfaces';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class productsService {
  private apiUrl= "https://fakestoreapi.com/products/";


  constructor(private http:HttpClient){}

  getProducts() :Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductWithID(id:string) :Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + id);
  }
}