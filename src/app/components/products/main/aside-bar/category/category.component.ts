import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../../../models/main/Category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories: Category[];
  @Output() emitCategoryChange = new EventEmitter<Category>();
  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(event, category: Category) {
    event.preventDefault();
    this.emitCategoryChange.emit(category);
  }
}
