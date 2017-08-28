import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ImageService } from "../gallery-container/image.service";
import { Image } from "../gallery-container/image.model";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, 
              private imageService: ImageService) { }

  storeImages() {
    return this.http.put('https://ng-gallary-prj.firebaseio.com/images.json', this.imageService.getImages());
  }

  getImages() {
    this.http.get('https://ng-gallary-prj.firebaseio.com/images.json')
      .map(
        (response: Response) => {
          const images: Image[] = response.json();
          console.log(response);
          
          return images;
        })
      .subscribe(
        (images: Image[]) => {
          this.imageService.setImages(images);
        }
      );
  } 
}
