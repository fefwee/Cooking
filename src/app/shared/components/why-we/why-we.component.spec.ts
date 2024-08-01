import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeComponent } from './why-we.component';

describe('WhyWeComponent', () => {
  let component: WhyWeComponent;
  let fixture: ComponentFixture<WhyWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
