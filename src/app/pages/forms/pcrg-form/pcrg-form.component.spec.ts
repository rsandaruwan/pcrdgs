import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrgFormComponent } from './pcrg-form.component';

describe('PcrgFormComponent', () => {
  let component: PcrgFormComponent;
  let fixture: ComponentFixture<PcrgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcrgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
