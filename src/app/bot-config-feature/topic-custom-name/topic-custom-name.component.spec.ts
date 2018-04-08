import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCustomNameComponent } from './topic-custom-name.component';

describe('TopicCustomNameComponent', () => {
  let component: TopicCustomNameComponent;
  let fixture: ComponentFixture<TopicCustomNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCustomNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCustomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
