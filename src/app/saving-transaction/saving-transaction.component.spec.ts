import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTransactionComponent } from './saving-transaction.component';

describe('SavingTransactionComponent', () => {
  let component: SavingTransactionComponent;
  let fixture: ComponentFixture<SavingTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
