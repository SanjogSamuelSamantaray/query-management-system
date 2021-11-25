import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBarComponent } from './choice-bar.component';

describe('ChoiceBarComponent', () => {
  let component: ChoiceBarComponent;
  let fixture: ComponentFixture<ChoiceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
