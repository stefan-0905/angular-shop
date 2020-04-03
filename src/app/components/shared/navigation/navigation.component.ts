import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  scrollTop = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollTop = document.documentElement.scrollTop >= 100;
    // if (this.scrollTop) {
    //   document.getElementsByTagName('header').item(0).classList.add('sticky-top');
    // } else {
    //   document.getElementsByTagName('header').item(0).classList.remove('sticky-top');
    // }
  }
}
