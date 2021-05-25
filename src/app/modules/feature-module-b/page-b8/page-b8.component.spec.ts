import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageB8Component } from './page-b8.component';

describe('PageB8Component', () => {
  let component: PageB8Component;
  let fixture: ComponentFixture<PageB8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageB8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageB8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
