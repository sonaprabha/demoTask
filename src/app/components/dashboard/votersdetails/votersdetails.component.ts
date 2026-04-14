import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votersdetails',
  templateUrl: './votersdetails.component.html',
  styleUrls: ['./votersdetails.component.css']
})
export class VotersdetailsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    // this.testDataonParent();  }

    
  }
  testDataonParent(){
    console.log("testing dane=============")
  }
}
