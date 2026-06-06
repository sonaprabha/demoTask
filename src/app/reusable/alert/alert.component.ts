import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
    standalone: true
})
export class AlertComponent {
  @Input() alertMessage : string ='';
  @Input() alertType :string ="";
}
