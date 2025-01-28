import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusGariandpComponent } from './campus-gariandp.component';

describe('CampusGariandpComponent', () => {
  let component: CampusGariandpComponent;
  let fixture: ComponentFixture<CampusGariandpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusGariandpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusGariandpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
