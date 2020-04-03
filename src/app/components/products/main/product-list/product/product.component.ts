import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../../models/main/Product.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('hovering', [
    state('inactive', style({opacity: '0'})),
    state('active', style({opacity: '1'})),
    transition('inactive => active', [
      animate(500)
    ]),
      transition('active => inactive', [
        animate(300)
      ])
  ])]
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  state = 'inactive';

  displayNone = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver() {
    this.displayNone = false;
  }

  onMouseOut() {
    this.displayNone = true;
  }

  onMouseEnter() {
    this.state = 'active';
  }
  onMouseLeave() {
    this.state = 'inactive';
  }

}
