import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AlreadyLoggedInGuard} from '../../services/security/already-logged-in-guard.service';

const routes: Routes = [
  {path: 'login', canActivate: [AlreadyLoggedInGuard], component: LoginComponent}
];

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent,
    RouterModule
  ]
})
export class LoginModule {}
