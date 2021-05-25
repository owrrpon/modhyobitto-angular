import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModuleAContainerComponent } from './feature-module-a-container.component';

describe('FeatureModuleAContainerComponent', () => {
  let component: FeatureModuleAContainerComponent;
  let fixture: ComponentFixture<FeatureModuleAContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureModuleAContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModuleAContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
