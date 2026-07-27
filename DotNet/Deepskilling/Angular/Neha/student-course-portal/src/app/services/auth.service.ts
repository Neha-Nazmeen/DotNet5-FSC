// Hands-On 7, Step 75 — backing service for the auth guard
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for the exercise — a real app would check a token / session
  isLoggedIn = true;
}
