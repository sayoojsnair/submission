import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdaboutusComponent } from './stdaboutus.component';

describe('StdaboutusComponent', () => {
  let component: StdaboutusComponent;
  let fixture: ComponentFixture<StdaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdaboutusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
