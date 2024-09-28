import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepthComponent } from './details-depth.component';

describe('DetailsDepthComponent', () => {
  let component: DetailsDepthComponent;
  let fixture: ComponentFixture<DetailsDepthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDepthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
