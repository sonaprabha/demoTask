import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChild } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { VotersdetailsComponent } from '../votersdetails/votersdetails.component';


@Component({
  selector: 'app-order-data',
templateUrl: './order-data.component.html',
  
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit , OnChanges{

// @Input() title!: string;
//   active = false;

@Input() productList :string[]=[];


constructor() { 
  console.log("constructorChild*******8");
}

////child component
ngOnInit(): void {
  console.log("ngOnInitChild");
}
ngOnChanges(): void {
  console.log("ngOnchnaheChild",this.productList);
}




}
