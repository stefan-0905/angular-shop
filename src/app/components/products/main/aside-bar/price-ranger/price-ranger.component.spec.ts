import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangerComponent } from './price-ranger.component';

describe('PriceRangerComponent', () => {
  let component: PriceRangerComponent;
  let fixture: ComponentFixture<PriceRangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
