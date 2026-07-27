// Hands-On 2 (Input/Output/lifecycle) + Hands-On 3 (ngSwitch, ngClass, ngStyle, directive, pipe)
// + Hands-On 6 (EnrollmentService injection)
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course?.id),
      'card--full': (this.course?.credits ?? 0) >= 4
    };
  }

  get borderStyle() {
    const colours: Record<string, string> = { passed: 'green', failed: 'red', pending: 'grey' };
    return { 'border-left-color': colours[this.course?.gradeStatus] ?? 'grey' };
  }

  get enrollLabel(): string {
    return this.enrollmentService.isEnrolled(this.course?.id) ? 'Unenroll' : 'Enroll';
  }

  onEnrollClick(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
