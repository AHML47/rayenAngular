import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRFComponent } from './add-rf.component';

describe('AddRFComponent', () => {
  let component: AddRFComponent;
  let fixture: ComponentFixture<AddRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
