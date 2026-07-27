// Hands-On 6, Step 67 — provided at COMPONENT level, so this gets its own isolated instance
// separate from any other component that might also provide NotificationService.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService], // new instance scoped to this component + its children
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}

  addSample(): void {
    this.notificationService.push('Enrollment opened!');
  }
}
