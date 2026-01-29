import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enterprise-cards',
  templateUrl: './enterprise-cards.component.html',
  styleUrls: ['./enterprise-cards.component.css']
})
export class EnterpriseCardsComponent  implements OnInit{
  @Input() title!: string;
  @Input() image :any;
  @Input() points: string[] = [];
  @Input() isActive = false;
  @Input() isMobile = false;
  @Input() index!: number;
  
  @Output() activate = new EventEmitter<number>();
  
  ngOnInit(): void {
    console.log(this.title);
  }
  handleHover() {
    if (!this.isMobile) {
      this.activate.emit(this.index);
    }
  }

  handleClick() {
    if (this.isMobile) {
      this.activate.emit(this.index);
    }
  }
}


