import { Component, OnInit } from '@angular/core';
import {Brand} from '../../../models/main/Brand.model';
import {Category} from '../../../models/main/Category.model';
import {Product} from '../../../models/main/Product.model';
import {ActivatedRoute, Data} from '@angular/router';
import {ApiFetcherServiceService} from '../../../services/ApiFetcherService.service';
import {AuthenticationService} from '../../../services/security/Authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: Category[] = [];
  brands: Brand[] = [];
  sizes = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL'
  ];
  products: Product[] = [];
  priceRange: { startValue: number, endValue: number} = {
    startValue: 0,
    endValue: 1000
  };

  // represent if we can fetch another page of products from server
  canLoadMore = true;
  // currently loaded page
  pageNumber = 0;
  // selected options
  selectedCategory: Category = new Category('');
  checkedBrands: Brand[] = [];
  checkedSizes: string[] = [];

  constructor(private route: ActivatedRoute, private apiFetcherService: ApiFetcherServiceService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    // preload data
    this.route.data.subscribe((data: Data) => {
      const contentData = data.data;
      this.products = contentData.products;
      this.categories = contentData.categories;
      this.brands = contentData.brands;
    });
  }

  // event fired when user check an option
  asideOptionChecked(asideOption: any) {
    if (asideOption.option === 'brand') {
      this.checkedBrands.push(asideOption.info);
    } else if (asideOption.option === 'size') {
      this.checkedSizes.push(asideOption.info);
    }
    this.updateSearch();
  }

  // event fired when user uncheck option
  asideOptionUnchecked(asideOption: any) {
    let index: number;
    switch (asideOption.option) {
      case 'brand':
        index = this.checkedBrands.indexOf(asideOption.info);
        this.checkedBrands.splice(index, 1);
        break;
      case 'size':
        index = this.checkedSizes.indexOf(asideOption.info);
        this.checkedSizes.splice(index, 1);
        break;
    }
    this.updateSearch();
  }

  // event fired when user changes category
  categoryChanged(category: Category) {
    this.selectedCategory = category;
    this.updateSearch();
  }

  // update products with new search
  updateSearch() {
    this.pageNumber = 0;
    this.fetchData(false);
  }

  // load new page of products with applied filters
  loadMore() {
    if (this.canLoadMore) {
      this.pageNumber++;
      this.fetchData(true);
    }
  }

  fetchData(concat: boolean) {
    this.apiFetcherService.filterPaged(this.selectedCategory, this.checkedBrands, this.checkedSizes, this.priceRange, this.pageNumber)
      .subscribe((data: { content: Product[], canLoadMore: boolean }) => {
        this.products = concat ? this.products.concat(data.content) : data.content;
        this.canLoadMore = data.canLoadMore;
      });
  }

  onSliderChanged(data: { startValue: number, endValue: number}) {
    this.priceRange = data;
    this.updateSearch();
  }

  logout() {
    this.auth.logout();
  }
}
