import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA4Component } from './page-a4.component';

describe('PageA4Component', () => {
  let component: PageA4Component;
  let fixture: ComponentFixture<PageA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
