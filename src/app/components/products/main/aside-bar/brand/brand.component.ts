import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Brand} from '../../../../../models/main/Brand.model';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @Output() checkedEmitter = new EventEmitter<any>();
  @Output() uncheckedEmitter = new EventEmitter<any>();

  @Input() brands: Brand[];

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(event, brand: Brand) {
    event.stopPropagation();
    (event.target.checked) ? this.checkedEmitter.emit({ option: 'brand', info: brand }) : this.uncheckedEmitter.emit({ option: 'brand', info: brand });
  }

}

