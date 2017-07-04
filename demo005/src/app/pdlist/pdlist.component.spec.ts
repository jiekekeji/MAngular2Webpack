/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdlistComponent } from './pdlist.component';

describe('PdlistComponent', () => {
  let component: PdlistComponent;
  let fixture: ComponentFixture<PdlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
