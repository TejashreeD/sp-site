import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBasicCardComponent } from './creat-basic-card.component';

describe('CreatBasicCardComponent', () => {
  let component: CreatBasicCardComponent;
  let fixture: ComponentFixture<CreatBasicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatBasicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatBasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
