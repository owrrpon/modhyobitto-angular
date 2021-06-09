import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhyobittoDialogComponent } from './modhyobitto-dialog.component';

describe('ModhyobittoDialogComponent', () => {
  let component: ModhyobittoDialogComponent;
  let fixture: ComponentFixture<ModhyobittoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhyobittoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModhyobittoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
