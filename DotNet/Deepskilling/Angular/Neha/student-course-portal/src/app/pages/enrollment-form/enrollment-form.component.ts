// Hands-On 4 — Template-driven form with built-in validators and contextual error messages
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester: 'Odd' | 'Even' = 'Odd';
  agreeToTerms = false;
  submitted = false;

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }
}
