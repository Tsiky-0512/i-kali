import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVertivalComponent } from './navigation-vertival.component';

describe('NavigationVertivalComponent', () => {
  let component: NavigationVertivalComponent;
  let fixture: ComponentFixture<NavigationVertivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationVertivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationVertivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
