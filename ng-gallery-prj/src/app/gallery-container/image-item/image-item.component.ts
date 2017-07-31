import { Image } from './../image.model';
import { ImageService } from './../image.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  selectedCategory: string;
  images: Image[];
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.selectedCategory = this.imageService.getSelectedCategory();
    console.log(this.imageService.getSelectedCategory());
  }

}
