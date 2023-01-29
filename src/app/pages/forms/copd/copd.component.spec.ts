import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopdComponent } from './copd.component';

describe('CopdComponent', () => {
  let component: CopdComponent;
  let fixture: ComponentFixture<CopdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
