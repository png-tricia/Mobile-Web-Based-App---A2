import { Component } from '@angular/core';

import { A2Personal, MyBooks, CampusData } from './gariandpInterface';
import A2data from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2gariandp';

  gariandpPersonal: A2Personal = A2data.a2Personal;
  gariandpBooks: MyBooks[] = A2data.myBooks;
  gariandpCampus: CampusData[] = A2data.campusData;

  /* NOTE: Could use one variable that holds entire JSON file and navigate to correct data but we will be utilizing the separate interfaces */

}
