import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConfigDashboardComponent } from './bot-config-dashboard.component';

describe('BotConfigDashboardComponent', () => {
  let component: BotConfigDashboardComponent;
  let fixture: ComponentFixture<BotConfigDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConfigDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConfigDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
