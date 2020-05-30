import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardPolicyComponent } from './custom-card-policy.component';

describe('CustomCardPolicyComponent', () => {
  let component: CustomCardPolicyComponent;
  let fixture: ComponentFixture<CustomCardPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
