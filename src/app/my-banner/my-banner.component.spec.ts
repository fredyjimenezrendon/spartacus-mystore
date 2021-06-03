import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBannerComponent } from './my-banner.component';

describe('MyBannerComponent', () => {
  let component: MyBannerComponent;
  let fixture: ComponentFixture<MyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
