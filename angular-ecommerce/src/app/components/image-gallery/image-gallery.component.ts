import { Component, Input, ViewChild} from '@angular/core';
import { imageGallery } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input()
  setData!:imageGallery;
  images:Array<string>=[];
  currentImage:number=0;
  ngOnInit(){
    console.log(this.setData)
    this.setData.images.forEach(image => {
      this.images.push(image)
    });
  }
  setMainImage(i:number){
    this.currentImage=i;
  }
}
