import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLandingComponent } from './common-landing.component';

describe('CommonLandingComponent', () => {
  let component: CommonLandingComponent;
  let fixture: ComponentFixture<CommonLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
