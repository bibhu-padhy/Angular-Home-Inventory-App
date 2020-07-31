import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsDialogComponent } from './add-items-dialog.component';

describe('AddItemsDialogComponent', () => {
  let component: AddItemsDialogComponent;
  let fixture: ComponentFixture<AddItemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
