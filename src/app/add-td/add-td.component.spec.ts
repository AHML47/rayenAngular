import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTDComponent } from './add-td.component';

describe('AddTDComponent', () => {
  let component: AddTDComponent;
  let fixture: ComponentFixture<AddTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
