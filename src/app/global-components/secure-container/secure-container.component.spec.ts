import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureContainerComponent } from './secure-container.component';

describe('SecureContainerComponent', () => {
  let component: SecureContainerComponent;
  let fixture: ComponentFixture<SecureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
