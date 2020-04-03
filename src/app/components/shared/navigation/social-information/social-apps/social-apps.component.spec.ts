import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAppsComponent } from './social-apps.component';

describe('SocialAppsComponent', () => {
  let component: SocialAppsComponent;
  let fixture: ComponentFixture<SocialAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
