import {CanDeactivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const tokenGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const router: Router = inject(Router);
  return localStorage.getItem('token') != '';

};
