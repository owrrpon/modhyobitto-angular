import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModuleBContainerComponent } from './feature-module-b-container.component';

describe('FeatureModuleBContainerComponent', () => {
  let component: FeatureModuleBContainerComponent;
  let fixture: ComponentFixture<FeatureModuleBContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureModuleBContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModuleBContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
