import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../services/security/auth-guard.service';
import {ProductsComponent} from './products.component';
import {MainContentResolver} from './main/main-content-resolver.service';
import {CreateComponent} from './create/create.component';
import {CreateResolverService} from './create/create-resolver.service';

const  routes: Routes = [
  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent, resolve: {data: MainContentResolver}},
  { path: 'products/create', canActivate: [AuthGuard], component: CreateComponent, resolve: {data: CreateResolverService} }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule {}
