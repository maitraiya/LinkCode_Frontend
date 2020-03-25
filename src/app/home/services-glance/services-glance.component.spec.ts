import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGlanceComponent } from './services-glance.component';

describe('ServicesGlanceComponent', () => {
  let component: ServicesGlanceComponent;
  let fixture: ComponentFixture<ServicesGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
