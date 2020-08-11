import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main.ViewComponent } from './main.view.component';

describe('Main.ViewComponent', () => {
  let component: Main.ViewComponent;
  let fixture: ComponentFixture<Main.ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main.ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
