import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGariandpComponent } from './header-gariandp.component';

describe('HeaderGariandpComponent', () => {
  let component: HeaderGariandpComponent;
  let fixture: ComponentFixture<HeaderGariandpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderGariandpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderGariandpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
