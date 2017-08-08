import { Injectable } from '@angular/core';
import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {

  profile = new Profile(
    'Dobrin Dimchev',
    'd0bch0',
    'test',
    'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
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
