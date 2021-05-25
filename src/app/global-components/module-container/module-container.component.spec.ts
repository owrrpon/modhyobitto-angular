import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleContainerComponent } from './module-container.component';

describe('ModuleContainerComponent', () => {
  let component: ModuleContainerComponent;
  let fixture: ComponentFixture<ModuleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
