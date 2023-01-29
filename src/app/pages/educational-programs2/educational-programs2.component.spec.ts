import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalPrograms2Component } from './educational-programs2.component';

describe('EducationalPrograms2Component', () => {
  let component: EducationalPrograms2Component;
  let fixture: ComponentFixture<EducationalPrograms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalPrograms2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalPrograms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
