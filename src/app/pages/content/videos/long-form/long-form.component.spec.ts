import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongFormComponent } from './long-form.component';

describe('LongFormComponent', () => {
  let component: LongFormComponent;
  let fixture: ComponentFixture<LongFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
