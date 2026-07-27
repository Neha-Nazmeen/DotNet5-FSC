// Hands-On 6 (Task 1) -> refactored in Hands-On 8 (Task 1) to use HttpClient instead of hardcoded data
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

@Injectable({ providedIn: 'root' }) // singleton — one instance shared across the whole app
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)), // tap = side effect only, never mutate data here
      retry(2), // retry up to 2 times before giving up
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course);
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
