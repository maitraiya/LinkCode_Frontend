import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateWorkshopComponent } from './corporate-workshop.component';

describe('CorporateWorkshopComponent', () => {
  let component: CorporateWorkshopComponent;
  let fixture: ComponentFixture<CorporateWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
