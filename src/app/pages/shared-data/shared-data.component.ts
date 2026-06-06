import { Component, HostListener } from '@angular/core';
import { EnterpriseCardsComponent } from '../../components/enterprise-cards/enterprise-cards.component';
// import{img} from "../../assets/images/";

@Component({
    selector: 'app-shared-data',
    templateUrl: './shared-data.component.html',
    styleUrls: ['./shared-data.component.css'],
    standalone: true,
    imports: [EnterpriseCardsComponent]
})
export class SharedDataComponent {
  activeIndex = 0;
  isMobile:boolean = false;

  cards = [
    {
      title: 'Pulse',
       image: 'assets/images/pulse.png',  
      points: [
        'AI Agent, compliant debt recovery',
        'powered by borrower signals',
        'behavioural precision',
        'settlement negotiation'
      ]
    },
    {
      title: 'ERP',
           image: 'assets/images/erp.png',  
      points: ['collection agency management',
            'Legal Module','Case Allocation',
            'Debt Restructuring']
    },
    {
      title: 'CRM',
           image: 'assets/images/crm.png',  
      points: [
        'Multi channel bots',
        'multi lingual',
        'dynamic diallers',
        'customer response tracking'
      ]
    },
    {
      title: 'Dashboard',
           image: 'assets/images/dashboard.png',  
      points: [
        'over 30+ presets',
        'connectible with lender’s analytics',
        'agent productivity enhancement'
      ]
    }
  ];

  constructor() {
    this.detectDevice();
  }

  @HostListener('window:resize')
  detectDevice() {
    this.isMobile = window.innerWidth <= 768;
  }

  setActive(index:any) {
    this.activeIndex = index;
  }
}
