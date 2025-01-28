import { Component, Input } from '@angular/core';
import { MyBooks } from '../gariandpInterface';

@Component({
  selector: 'app-books-gariandp',
  templateUrl: './books-gariandp.component.html',
  styleUrl: './books-gariandp.component.css'
})
export class BooksGariandpComponent {
  @Input() myBooks991446494!: MyBooks[];

  displayedColumns: string[] = ['authorName', 'bookTitle', 'published'];

} 
