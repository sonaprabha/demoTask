import { Component } from '@angular/core';
import { EmpDataComponent } from '../emp-data/emp-data.component';
import { HoverEffectDirective } from '../../../shared-module/hover-effect.directive';
import { HeaderComponent } from '../../../shared-module/header/header.component';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css'],
    standalone: true,
    imports: [HeaderComponent, HoverEffectDirective, EmpDataComponent]
})
export class AnalyticsComponent {

}
