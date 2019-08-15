import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L75NgcomponentComponent } from './l75-ngcomponent.component';

describe('L75NgcomponentComponent', () => {
  let component: L75NgcomponentComponent;
  let fixture: ComponentFixture<L75NgcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L75NgcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L75NgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
