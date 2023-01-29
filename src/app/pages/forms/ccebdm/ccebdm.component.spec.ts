import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCEBDMComponent } from './ccebdm.component';

describe('CCEBDMComponent', () => {
  let component: CCEBDMComponent;
  let fixture: ComponentFixture<CCEBDMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCEBDMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCEBDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
