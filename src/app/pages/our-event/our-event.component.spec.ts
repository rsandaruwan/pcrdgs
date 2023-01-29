import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEventComponent } from './our-event.component';

describe('OurEventComponent', () => {
  let component: OurEventComponent;
  let fixture: ComponentFixture<OurEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
