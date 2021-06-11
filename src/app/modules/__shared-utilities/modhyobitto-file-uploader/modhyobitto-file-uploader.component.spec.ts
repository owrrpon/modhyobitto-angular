import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhyobittoFileUploaderComponent } from './modhyobitto-file-uploader.component';

describe('ModhyobittoFileUploaderComponent', () => {
  let component: ModhyobittoFileUploaderComponent;
  let fixture: ComponentFixture<ModhyobittoFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhyobittoFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModhyobittoFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
