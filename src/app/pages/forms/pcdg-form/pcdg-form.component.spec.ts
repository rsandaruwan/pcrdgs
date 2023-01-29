import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdgFormComponent } from './pcdg-form.component';

describe('PcdgFormComponent', () => {
  let component: PcdgFormComponent;
  let fixture: ComponentFixture<PcdgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
