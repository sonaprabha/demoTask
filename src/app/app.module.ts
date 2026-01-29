import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedDataComponent } from './pages/shared-data/shared-data.component';
import { EnterpriseCardsComponent } from './components/enterprise-cards/enterprise-cards.component';
import { ReuseComponent } from './components/reuse/reuse.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedDataComponent,
    EnterpriseCardsComponent,
    ReuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
