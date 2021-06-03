import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhyobittoFormFieldComponent } from './modhyobitto-form-field.component';

describe('ModhyobittoFormFieldComponent', () => {
  let component: ModhyobittoFormFieldComponent;
  let fixture: ComponentFixture<ModhyobittoFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhyobittoFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModhyobittoFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
