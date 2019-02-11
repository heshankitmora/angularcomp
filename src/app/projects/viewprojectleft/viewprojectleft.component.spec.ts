import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectleftComponent } from './viewprojectleft.component';

describe('ViewprojectleftComponent', () => {
  let component: ViewprojectleftComponent;
  let fixture: ComponentFixture<ViewprojectleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
