import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuAcceuilComponent } from './contenu-acceuil.component';

describe('ContenuAcceuilComponent', () => {
  let component: ContenuAcceuilComponent;
  let fixture: ComponentFixture<ContenuAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenuAcceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
