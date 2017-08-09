import { Component, OnInit } from '@angular/core';
import { Profile } from "../../profile.model";
import { ProfileService } from "../../profile.service";

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  profile: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }

}
