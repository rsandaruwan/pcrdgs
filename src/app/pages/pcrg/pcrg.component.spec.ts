import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrgComponent } from './pcrg.component';

describe('PcrgComponent', () => {
  let component: PcrgComponent;
  let fixture: ComponentFixture<PcrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
