// Hands-On 1 (created) -> HO2 (@Output handling) -> HO3 (*ngIf/*ngFor/trackBy) -> HO6 (service)
// -> HO7 (navigation, query params) -> HO8 (HttpClient) -> HO9 (NgRx store, replaces the service call)
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  isLoading$: Observable<boolean> = this.store.select(selectCoursesLoading);
  error$: Observable<string | null> = this.store.select(selectCoursesError);

  searchTerm = '';
  selectedCourseId: number | null = null;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  trackByCourseId(index: number, course: Course): number {
    // Without trackBy Angular re-renders every card on any array change; with it, only changed items update.
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
  }

  openDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }
}
