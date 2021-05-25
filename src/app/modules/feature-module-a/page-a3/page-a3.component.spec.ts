import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageA3Component } from './page-a3.component';

describe('PageA3Component', () => {
  let component: PageA3Component;
  let fixture: ComponentFixture<PageA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageA3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
