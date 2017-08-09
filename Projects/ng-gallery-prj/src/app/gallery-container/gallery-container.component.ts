import { Image } from './image.model';
import { ImageService } from './image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryContainerComponent implements OnInit {
  imageCategories: string[];
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageCategories = this.imageService.getCategories();
  }

}
