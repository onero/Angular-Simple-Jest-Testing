import { TestBed } from '@angular/core/testing';

import { MyTestService } from './my-test.service';

describe('MyTestService', () => {
  let fixture: MyTestService;

  beforeEach(() => {
    fixture = new MyTestService();
  });

  it('should be created', () => {
    expect(fixture).toBeTruthy();
  });
});
