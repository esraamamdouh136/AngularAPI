import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DIVSComponent } from './divs.component';

describe('DIVSComponent', () => {
  let component: DIVSComponent;
  let fixture: ComponentFixture<DIVSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DIVSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DIVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
