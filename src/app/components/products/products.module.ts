import {FormsModule, NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {MainComponent} from './main/main.component';
import {CategoryComponent} from './main/aside-bar/category/category.component';
import {SizeComponent} from './main/aside-bar/size/size.component';
import {BrandComponent} from './main/aside-bar/brand/brand.component';
import {PriceRangerComponent} from './main/aside-bar/price-ranger/price-ranger.component';
import {ProductComponent} from './main/product-list/product/product.component';
import {ProductListComponent} from './main/product-list/product-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng5SliderModule} from 'ng5-slider';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ShortenPipe} from './main/product-list/product/product.component.pipe';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    CategoryComponent,
    SizeComponent,
    BrandComponent,
    PriceRangerComponent,
    ProductComponent,
    ProductListComponent,
    ShortenPipe,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule {}
