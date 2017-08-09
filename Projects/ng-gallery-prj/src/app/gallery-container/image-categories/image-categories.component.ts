import { ImageService } from './../image.service';
import { Image } from './../image.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-categories',
  templateUrl: './image-categories.component.html',
  styleUrls: ['./image-categories.component.css']
})
export class ImageCategoriesComponent implements OnInit {
  @Input() category: string;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    console.log(this.category);
        console.log(typeof this.category);

  }

  onSelectedCategory(category) {
    this.imageService.setSelectedCategory(category);
     console.log(typeof this.imageService.getSelectedCategory());
  }

}
