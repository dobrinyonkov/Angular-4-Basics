import { Injectable } from '@angular/core';
import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {

  profile = new Profile(
    'Dobrin Dimchev',
    'd0bch0',
    'test',
    'https://www.w3schools.com/w3css/img_avatar3.png',
    'Audi',
    5,
    5,
    5,);
  
  getProfile() {
    return this.profile;
  }

  updateProfile(profile: Profile) {
    this.profile = profile;
  }

  
}
