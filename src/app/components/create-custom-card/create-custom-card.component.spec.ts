import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomCardComponent } from './create-custom-card.component';

describe('CreateCustomCardComponent', () => {
  let component: CreateCustomCardComponent;
  let fixture: ComponentFixture<CreateCustomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
