import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhyobittoTableComponent } from './modhyobitto-table.component';

describe('ModhyobittoTableComponent', () => {
  let component: ModhyobittoTableComponent;
  let fixture: ComponentFixture<ModhyobittoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhyobittoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModhyobittoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
