import { Image } from './../image.model';
import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  id: number;
  constructor(private route: ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.image = this.imageService.getImage(this.id);
      }
      );
  }
  onNext() {
    this.id += 1;
  }
}
