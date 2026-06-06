import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmmoduleComponent } from './confirmmodule.component';

describe('ConfirmmoduleComponent', () => {
  let component: ConfirmmoduleComponent;
  let fixture: ComponentFixture<ConfirmmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ConfirmmoduleComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
