import { Component, Input } from '@angular/core';
import { A2Personal } from '../gariandpInterface';

@Component({
  selector: 'app-header-gariandp',
  templateUrl: './header-gariandp.component.html',
  styleUrl: './header-gariandp.component.css'
})
export class HeaderGariandpComponent {
  @Input() gariandpMyData!: A2Personal;

}
