import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isGuestUserGuard } from './is-guest-user.guard';

describe('isGuestUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isGuestUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
