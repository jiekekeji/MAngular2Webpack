/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Pa2childService } from './pa2child.service';

describe('Pa2childService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pa2childService]
    });
  });

  it('should ...', inject([Pa2childService], (service: Pa2childService) => {
    expect(service).toBeTruthy();
  }));
});
