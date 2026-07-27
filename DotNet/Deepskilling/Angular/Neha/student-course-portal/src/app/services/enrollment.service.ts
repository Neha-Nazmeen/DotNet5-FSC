// Hands-On 6 (Task 2) — service-to-service injection: EnrollmentService depends on CourseService
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    // In the HTTP-backed version this would combine with CourseService's cached list.
    return [];
  }

  // Step 87 — dependent HTTP call, cancels the previous in-flight request via switchMap in the component
  getStudentsByCourse(courseId: number): Observable<string[]> {
    return of([`Student A (course ${courseId})`, `Student B (course ${courseId})`]);
  }
}
