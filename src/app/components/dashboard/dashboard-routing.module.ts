import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'orders',component:OrderComponent},
  {path:'analytics',component:AnalyticsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
