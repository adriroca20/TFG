import { Component, Input, HostListener, OnInit} from '@angular/core';
import { ImageGallery } from '../../interfaces/Interfaces';

@Component({
  selector: 'ecom-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit{
  @Input()
  setData!:ImageGallery;
  images:Array<string>=[];
  currentImage:number=0;
  mainImage!:any
  @HostListener('mousemove',['$event'])
  zoomImage(event:any){
    let areaImage:any= event.target
    if(areaImage.className == "main-image"){
    let image:any= event.target.firstChild
    let clientX:any = event.clientX - areaImage.offsetLeft;
    let clientY:any = event.clientY - areaImage.offsetTop;
    let mWidth= areaImage.offsetWidth
    let mHeight= areaImage.offsetHeight
    clientX= clientX/mWidth * 100
    clientY= clientY/mHeight * 100
    let transformation:string= 'translate(-' + clientX + '%,-'+ clientY+ '%) scale(2)'
    image.style.transform=transformation
    }
  }
  @HostListener('mouseleave',['$event'])
  restoreImage(event:any){
    if(event.target.className == "main-image"){
      let image:any= event.target.firstChild
      image.style.transform="translate(-50%, -50%) scale(1)"
    }
  }
  ngOnInit(){
    this.mainImage=document.querySelectorAll(".main-image")[0]
    this.mainImage.addEventListener
    this.images= this.setData.images
  }
  setMainImage(i:number){
    this.currentImage=i;
  }
}
