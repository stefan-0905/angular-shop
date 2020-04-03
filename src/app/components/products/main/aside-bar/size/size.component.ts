import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Brand} from '../../../../../models/main/Brand.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  @Input() sizes: string[];
  @Output() checkedEmitter = new EventEmitter<any>();
  @Output() uncheckedEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(event, size: string) {
    event.stopPropagation();
    (event.target.checked) ? this.checkedEmitter.emit({ option: 'size', info: size }) : this.uncheckedEmitter.emit({ option: 'size', info: size });
  }

}
