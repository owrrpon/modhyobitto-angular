import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageB5Component } from './page-b5.component';

describe('PageB5Component', () => {
  let component: PageB5Component;
  let fixture: ComponentFixture<PageB5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageB5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
