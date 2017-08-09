import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../profile.service";
import { Profile } from "../../profile.model";

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profile: Profile;
  ngOnInit() {
    this.profile = this.profileService.getProfile();
  console.log(this.profile.name);
  }

}
