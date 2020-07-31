import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsModalComponent } from './item-details-modal.component';

describe('ItemDetailsModalComponent', () => {
  let component: ItemDetailsModalComponent;
  let fixture: ComponentFixture<ItemDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
