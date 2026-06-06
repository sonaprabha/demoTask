import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { OrderDataComponent } from '../order-data/order-data.component';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    standalone: true
})
export class TabsComponent implements AfterContentInit {
  constructor(){
    console.log("Tabs component initialized");
  }

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.selectTab(this.tabs.first)
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

}
