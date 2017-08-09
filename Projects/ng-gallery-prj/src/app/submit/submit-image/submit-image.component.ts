import { Image } from './../../gallery-container/image.model';
import { ImageService } from './../../gallery-container/image.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-submit-image',
  templateUrl: './submit-image.component.html',
  styleUrls: ['./submit-image.component.css']
})
export class SubmitImageComponent implements OnInit {
  submitImageForm: FormGroup;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.submitImageForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.imageService.addImage(this.submitImageForm.value);
  }

}
