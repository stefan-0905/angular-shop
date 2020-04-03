import { Component, OnInit } from '@angular/core';
import {SocialApp} from '../../../../../models/navigation/SocialApp.model';

@Component({
  selector: 'app-social-apps',
  templateUrl: './social-apps.component.html',
  styleUrls: ['./social-apps.component.css']
})
export class SocialAppsComponent implements OnInit {
  socialApps: SocialApp[] = [];
  constructor() {
    const facebook = new SocialApp(
      'facebook',
      '#',
      'fa fa-facebook-square'
    );
    const twitter = new SocialApp(
      'twitter',
      '#',
      'fa fa-twitter'
    );
    const instagram = new SocialApp(
      'instagram',
      '#',
      'fa fa-instagram'
    );
    this.socialApps = [ facebook, twitter, instagram ];
  }
  ngOnInit(): void {
  }
}


