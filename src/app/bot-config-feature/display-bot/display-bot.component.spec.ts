import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBotComponent } from './display-bot.component';

describe('DisplayBotComponent', () => {
  let component: DisplayBotComponent;
  let fixture: ComponentFixture<DisplayBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
