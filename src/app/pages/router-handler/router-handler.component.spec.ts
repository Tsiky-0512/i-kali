import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterHandlerComponent } from './router-handler.component';

describe('RouterHandlerComponent', () => {
  let component: RouterHandlerComponent;
  let fixture: ComponentFixture<RouterHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
