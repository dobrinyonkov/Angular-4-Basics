import { Image } from './image.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageService {
  imagesChanged = new Subject<Image[]>();
  selectedCategory: string;
  selectedCategoryChanged = new Subject<string>();

    private images: Image[] = [
        new Image(
            'Audi S3 8l',
            '1.8T 231HP Year 2003',
            'https://s-media-cache-ak0.pinimg.com/originals/67/ca/f0/67caf0c91e86f4300bfc15878371743f.jpg',
            'Audi'
        ),
        new Image(
            'Audi S4 b5',
            '2.7biTurbo 399HP Year 2003',
            'https://static.carthrottle.com/workspace/uploads/posts/2016/01/650dade0dce824b1ee23c534f68cb219.jpg',
            'test'
        ),
        new Image(
            'Audi S3 8l',
            '1.8T 231HP Year 2003',
            'http://www.fourtitude.com/gallery/albums//Audi/A6-S6-RS6%20(C4,%20C5,%20C6)/RS6%20(C5)/Avant%20-%20EU/008.jpg',
            'test'
        ),
        new Image(
            'Audi S3 8l',
            '1.8T 231HP Year 2003',
            'https://s-media-cache-ak0.pinimg.com/originals/67/ca/f0/67caf0c91e86f4300bfc15878371743f.jpg',
            'test'
        ),
        new Image(
            'Audi S3 8l',
            '1.8T 231HP Year 2003',
            'https://s-media-cache-ak0.pinimg.com/originals/67/ca/f0/67caf0c91e86f4300bfc15878371743f.jpg',
            'test'
        ),
        new Image(
            'Audi S3 8l',
            '1.8T 231HP Year 2003',
            'https://s-media-cache-ak0.pinimg.com/originals/67/ca/f0/67caf0c91e86f4300bfc15878371743f.jpg',
            'test'
        )
    ];

    getImages() {
        return this.images.slice();
    }

    getImage(index: number) {
        return this.images[index];
    }

    addImage(image: Image) {
        this.images.push(image);
        this.imagesChanged.next(this.images.slice());
    }

    getCategories() {
        const arr = [];
        for (const cat of this.images) {
            arr.push(cat.category);
        }
        return arr.reduce((x, y) => x.includes(y) ? x : [...x, y], []);
    }

    setSelectedCategory(newCategory: string) {
        this.selectedCategory = newCategory;
        this.selectedCategoryChanged.next(this.selectedCategory);
    }

    getSelectedCategory() {
        return this.selectedCategory;
    }
}
