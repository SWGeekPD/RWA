import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RWAComponent } from './rwa.component';

describe('HelloWorldComponent', () => {
  let component: RWAComponent;
  let fixture: ComponentFixture<RWAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RWAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
