import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksGariandpComponent } from './books-gariandp.component';

describe('BooksGariandpComponent', () => {
  let component: BooksGariandpComponent;
  let fixture: ComponentFixture<BooksGariandpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksGariandpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksGariandpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
