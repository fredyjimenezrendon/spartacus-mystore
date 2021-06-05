import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductSummaryComponent } from './custom-product-summary.component';

describe('CustomProductSummaryComponent', () => {
  let component: CustomProductSummaryComponent;
  let fixture: ComponentFixture<CustomProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
