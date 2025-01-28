import { Component, Input } from '@angular/core';
import { A2Personal} from '../gariandpInterface';

@Component({
  selector: 'app-footer-gariandp',
  templateUrl: './footer-gariandp.component.html',
  styleUrl: './footer-gariandp.component.css'
})
export class FooterGariandpComponent {
  @Input() gariandpMyData!: A2Personal;
  
}
