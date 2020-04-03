import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/main/Product.model';
import {ApiFetcherServiceService} from '../../../../services/ApiFetcherService.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('productState', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate(300)
      ])
    ])]
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() canLoadMore: boolean;
  @Output() loadMore = new EventEmitter();

  constructor(private apiFetcherService: ApiFetcherServiceService) { }

  ngOnInit(): void {
  }

  loadMoreProducts() {
    this.loadMore.emit();
  }
}
