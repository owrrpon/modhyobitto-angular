import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA2Component } from './page-a2.component';

describe('PageA2Component', () => {
  let component: PageA2Component;
  let fixture: ComponentFixture<PageA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
