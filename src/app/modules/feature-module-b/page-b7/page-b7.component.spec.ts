import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageB7Component } from './page-b7.component';

describe('PageB7Component', () => {
  let component: PageB7Component;
  let fixture: ComponentFixture<PageB7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageB7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageB7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
