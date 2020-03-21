import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConsultingComponent } from './project-consulting.component';

describe('ProjectConsultingComponent', () => {
  let component: ProjectConsultingComponent;
  let fixture: ComponentFixture<ProjectConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
