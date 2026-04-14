import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersdetailsComponent } from './votersdetails.component';

describe('VotersdetailsComponent', () => {
  let component: VotersdetailsComponent;
  let fixture: ComponentFixture<VotersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
