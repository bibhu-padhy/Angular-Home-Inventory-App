import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInventoryComponent } from './my-inventory.component';

describe('MyInventoryComponent', () => {
  let component: MyInventoryComponent;
  let fixture: ComponentFixture<MyInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
