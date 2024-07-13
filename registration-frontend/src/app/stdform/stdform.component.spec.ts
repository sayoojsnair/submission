import { ComponentFixture, TestBed } from '@angular/core/testing';

import { stdformComponent } from './stdform.component';

describe('stdformComponent', () => {
  let component: stdformComponent;
  let fixture: ComponentFixture<stdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [stdformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(stdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
