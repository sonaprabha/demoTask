import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedDataComponent } from './pages/shared-data/shared-data.component';
import { EnterpriseCardsComponent } from './components/enterprise-cards/enterprise-cards.component';
import { ReuseComponent } from './components/reuse/reuse.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './components/dashboard/tab/tab.component';
import { ConfirmmoduleComponent } from './pages/confirmmodule/confirmmodule.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SharedDataComponent,
    EnterpriseCardsComponent,
    ReuseComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmmoduleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModuleModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
