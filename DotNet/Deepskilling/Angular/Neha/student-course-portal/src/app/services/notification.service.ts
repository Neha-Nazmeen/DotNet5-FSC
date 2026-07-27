// Hands-On 6, Step 67 — intended to be provided at COMPONENT level (see NotificationComponent),
// not root, so each component gets its own isolated instance/state.
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private messages: string[] = [];

  push(message: string): void {
    this.messages.push(message);
  }

  getAll(): string[] {
    return this.messages;
  }
}
