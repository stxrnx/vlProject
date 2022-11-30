import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPlayerComponent } from './forms-player.component';

describe('FormsPlayerComponent', () => {
  let component: FormsPlayerComponent;
  let fixture: ComponentFixture<FormsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
