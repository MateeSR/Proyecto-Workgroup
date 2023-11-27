import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { normalRoleGuard } from './normal-role.guard';

describe('normalRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => normalRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
