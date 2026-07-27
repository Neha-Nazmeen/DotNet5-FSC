// Hands-On 1 (created) + Hands-On 6 (EnrollmentService for the enrolled courses list)
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
