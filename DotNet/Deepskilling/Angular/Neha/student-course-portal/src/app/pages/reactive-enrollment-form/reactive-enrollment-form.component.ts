// Hands-On 5 — Reactive form: FormBuilder, custom sync/async validators, FormArray
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,
  ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

// Step 53 — custom synchronous validator
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '') as string;
  return value.startsWith('XX') ? { noCourseCode: true } : null;
}

// Step 55 — custom async validator (Promise-based)
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = (control.value ?? '') as string;
      resolve(value.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', [Validators.required, Validators.email], [simulateEmailCheck]),
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    // Typed getter avoids repeated `as FormArray` casts scattered through the template
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // .value excludes disabled controls; .getRawValue() includes every control regardless of disabled state
    console.log(this.enrollForm.value);
    console.log(this.enrollForm.getRawValue());
  }

  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }
}
