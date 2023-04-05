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
  // https://api.artic.edu/api/v1/artworks
  // https://api.escuelajs.co/api/v1/products
  private apiUrl= "https://fakestoreapi.com/products";


  constructor(private http:HttpClient){}

  getProducts() :Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}