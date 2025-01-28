import { Component, Input } from '@angular/core';
import { CampusData } from '../gariandpInterface';

@Component({
  selector: 'app-campus-gariandp',
  templateUrl: './campus-gariandp.component.html',
  styleUrl: './campus-gariandp.component.css'
})
export class CampusGariandpComponent {
  @Input() campusData991446494!: CampusData[];

  // Module 5 - JSON Directives 
  campus = "Hello";

  campusArray: {
    campus: string,
    street: string,
    city: string
  }[] = [];

  buildArray(campus: string) {
    this.campusArray = [];
    for (let x of this.campusData991446494) {
      if (x.campus === String(campus)) {
        this.campusArray.push({ "campus": x.campus, "street": x.street, "city": x.city });
      }
    }
  }
}


