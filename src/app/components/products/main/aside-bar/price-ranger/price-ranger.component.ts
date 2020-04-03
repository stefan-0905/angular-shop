import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Options} from 'ng5-slider';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-price-ranger',
  templateUrl: './price-ranger.component.html',
  styleUrls: ['./price-ranger.component.css']
})
export class PriceRangerComponent implements OnInit {

  @Output() sliderChanged = new EventEmitter<{ startValue: number, endValue: number }>();

  private ceilPrice = 1000;

  startValue = 0;
  endValue = this.ceilPrice;

  options: Options = {
    floor: 0,
    ceil: this.ceilPrice,
    step: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSliderChanged(event) {
    this.startValue = event.value;
    this.endValue = event.highValue;
    this.sliderChanged.emit({ startValue: this.startValue, endValue: this.endValue });
  }

  updateStartValue(event) {
    this.startValue = +event.target.value;
    this.sliderChanged.emit({ startValue: this.startValue, endValue: this.endValue });
  }

  updateEndValue(event) {
    this.endValue = +event.target.value;
    this.sliderChanged.emit({ startValue: this.startValue, endValue: this.endValue });
  }

}
