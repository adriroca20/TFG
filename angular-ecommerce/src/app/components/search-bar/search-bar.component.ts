import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

categoriasMostradas:boolean= false;
@Input() setData!:any;
@Output() getData =  new EventEmitter<any>();
dataToEmit:any={
  searchText:"",
  category:""
}
  ngOnInit(){
    this.dataToEmit.category= this.setData.categories[0];
  }
  sendData(search:any){
    this.dataToEmit.searchText=search.value;
    console.log(this.dataToEmit);
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
