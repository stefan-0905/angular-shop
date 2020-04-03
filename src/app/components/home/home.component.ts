import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/security/Authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  navigateToCreate() {
    this.router.navigate(['/products/create']);
  }

  logout() {
    this.auth.logout();
  }
}
