import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcommentsComponent } from './popupcomments.component';

describe('PopupcommentsComponent', () => {
  let component: PopupcommentsComponent;
  let fixture: ComponentFixture<PopupcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
