import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartConfigComponent } from './start-config.component';

describe('StartConfigComponent', () => {
  let component: StartConfigComponent;
  let fixture: ComponentFixture<StartConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
