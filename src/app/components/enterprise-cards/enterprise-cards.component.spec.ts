import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCardsComponent } from './enterprise-cards.component';

describe('EnterpriseCardsComponent', () => {
  let component: EnterpriseCardsComponent;
  let fixture: ComponentFixture<EnterpriseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EnterpriseCardsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
