import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/security/Authentication.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.authentication.login(form.value).subscribe(() => {
      this.router.navigate(['/products']);
    }, error => {
      // TODO: Handle error
      console.log(error);
    });
  }
}
