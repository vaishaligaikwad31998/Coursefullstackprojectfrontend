import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedeleteComponent } from './coursedelete.component';

describe('CoursedeleteComponent', () => {
  let component: CoursedeleteComponent;
  let fixture: ComponentFixture<CoursedeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursedeleteComponent]
    });
    fixture = TestBed.createComponent(CoursedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
