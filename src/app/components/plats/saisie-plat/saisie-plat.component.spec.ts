import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiePlatComponent } from './saisie-plat.component';

describe('SaisiePlatComponent', () => {
  let component: SaisiePlatComponent;
  let fixture: ComponentFixture<SaisiePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisiePlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisiePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
