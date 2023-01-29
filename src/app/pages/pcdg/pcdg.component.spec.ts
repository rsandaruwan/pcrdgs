import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdgComponent } from './pcdg.component';

describe('PcdgComponent', () => {
  let component: PcdgComponent;
  let fixture: ComponentFixture<PcdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
