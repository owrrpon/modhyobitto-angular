import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageB6Component } from './page-b6.component';

describe('PageB6Component', () => {
  let component: PageB6Component;
  let fixture: ComponentFixture<PageB6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageB6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageB6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
