import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ConfirmmoduleComponent } from 'src/app/pages/confirmmodule/confirmmodule.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css'],
    standalone: true,
})
export class TabComponent {

  @Input() title!: string;
  active = false;
  @ViewChild('modalHost', { read: ViewContainerRef })vcRef!: ViewContainerRef;

openModal() {
  console.log("open modal========",this.title);
  const ref = this.vcRef.createComponent(ConfirmmoduleComponent);

  ref.instance.title = this.title;
}



closeModal() {
  this.vcRef.clear(); // or ref.destroy()
}
}
