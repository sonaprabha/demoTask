import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { VotersdetailsComponent } from '../votersdetails/votersdetails.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit ,OnChanges, AfterViewInit,OnDestroy{
  @ViewChild(VotersdetailsComponent) data!: VotersdetailsComponent;
  @ViewChildren("filter") inputData !: QueryList<ElementRef>;
 
computerdetails= ["hp","dell"];
productList$ = new BehaviorSubject<string[]>([]);

constructor() { 
  console.log("constructorParent===");
  this.productList$.next(["hp","dell","lenovo"]);
  this.productList$
  .pipe(debounceTime(300))
  .subscribe(list => {
    this.callSearchAPI(list);
  }); 
}
  ngOnInit(): void {
    console.log("ngOnInitParent");
  }

  ngOnChanges(): void {
    // debugger;
    console.log("ngOnChangesParent**********************");
  }

  ngAfterViewInit(): void {
        console.log("ngAfter view init call");
        this.inputData.forEach(element =>{
          element.nativeElement.style.backgroundColor = "red";
          element.nativeElement.style.color = "white";
          element.nativeElement.style.border = "1px solid black";
          element.nativeElement.style.margin = "5px";
        })
    this.data.testDataonParent(); 
   }

  callSearchAPI(list:any){
    this.computerdetails = list;
    console.log("API called with list:", list);
  }

  ngOnDestroy(): void {
    this.productList$.complete();
    console.log("ngOnDestroyParent");
  }



  
}
