import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInformationComponent } from './social-information.component';

describe('SocialInformationComponent', () => {
  let component: SocialInformationComponent;
  let fixture: ComponentFixture<SocialInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
