import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBasicCardComponent } from './create-basic-card.component';

describe('CreatBasicCardComponent', () => {
  let component: CreateBasicCardComponent;
  let fixture: ComponentFixture<CreateBasicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBasicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
