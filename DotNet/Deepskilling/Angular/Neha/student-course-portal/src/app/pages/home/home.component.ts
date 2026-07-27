// Hands-On 1 (created) + Hands-On 2 (bindings, lifecycle) + Hands-On 6 (CourseService for live count)
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesAvailable = courses.length),
      error: () => (this.coursesAvailable = 0)
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // [disabled] is one-way, component -> DOM.
  // [(ngModel)] is two-way, DOM <-> component: it is shorthand for
  // [ngModel]="searchTerm" (ngModelChange)="searchTerm = $event"
}
