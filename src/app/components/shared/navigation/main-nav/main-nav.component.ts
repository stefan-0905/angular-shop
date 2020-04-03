import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../models/navigation/Link.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  navLinks: Link[];
  constructor() {
    this.navLinks = [
      new Link('Home', ''),
      new Link('Products', '/products'),
      new Link('Hot Deals', '#'),
      new Link('About', '#'),
      new Link('Blog', '#'),
      new Link('Contact', '#')
    ];
  }
  ngOnInit(): void {
  }

}


