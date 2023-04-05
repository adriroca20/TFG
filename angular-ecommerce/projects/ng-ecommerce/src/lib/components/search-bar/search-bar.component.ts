import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchBar } from '../../interfaces/Interfaces';
@Component({
  selector: 'ecom-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

categoriasMostradas:boolean= false;
@Input() setData!:SearchBar;
@Output() getData =  new EventEmitter<any>();
dataToEmit:any={
  searchText:"",
  category:""
}
  ngOnInit(){
    this.dataToEmit.category= this.setData.categories[0];
  }
  sendData(search:any){
    this.categoriasMostradas=false;
    this.dataToEmit.searchText=search.value;
    this.getData.emit(this.dataToEmit);
  }
  setCategory(event:any){
    console.log(event.target.value);
    this.dataToEmit.category= event.target.value;
  }
  mostrarCategorias(){
    this.categoriasMostradas=!this.categoriasMostradas;
  }
}
