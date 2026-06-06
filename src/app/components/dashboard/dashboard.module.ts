import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { OrderDataComponent } from './order-data/order-data.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { VotersdetailsComponent } from './votersdetails/votersdetails.component';
import { ConfirmmoduleComponent } from 'src/app/pages/confirmmodule/confirmmodule.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { share } from 'rxjs';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AlertComponent } from 'src/app/reusable/alert/alert.component';
import { SpinnerComponent } from 'src/app/reusable/spinner/spinner.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DashboardComponent,
    OrderComponent,
    OrderDataComponent,
    TabsComponent,
    TabComponent,
    VotersdetailsComponent,
    AnalyticsComponent,
    EmpDataComponent,
    AlertComponent,
        SpinnerComponent,
        RxjsComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
   MatFormFieldModule,
    MatInputModule
    
  ],

})
export class DashboardModule { }
