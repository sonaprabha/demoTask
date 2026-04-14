import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HoverEffectDirective } from './hover-effect.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    HoverEffectDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[HeaderComponent,HoverEffectDirective]
})
export class SharedModuleModule { }
