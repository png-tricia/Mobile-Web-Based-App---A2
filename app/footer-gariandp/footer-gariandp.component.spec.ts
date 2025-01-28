import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGariandpComponent } from './footer-gariandp.component';

describe('FooterGariandpComponent', () => {
  let component: FooterGariandpComponent;
  let fixture: ComponentFixture<FooterGariandpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterGariandpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterGariandpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
