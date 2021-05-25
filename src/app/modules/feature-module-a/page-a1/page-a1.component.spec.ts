import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA1Component } from './page-a1.component';

describe('PageA1Component', () => {
  let component: PageA1Component;
  let fixture: ComponentFixture<PageA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
