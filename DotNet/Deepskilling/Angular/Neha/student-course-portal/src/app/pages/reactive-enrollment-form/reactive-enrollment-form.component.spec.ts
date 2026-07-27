import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';

describe('ReactiveEnrollmentFormComponent', () => {
  let fixture: ComponentFixture<ReactiveEnrollmentFormComponent>;
  let component: ReactiveEnrollmentFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ReactiveEnrollmentFormComponent] }).compileComponents();
    fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and be invalid when empty', () => {
    expect(component).toBeTruthy();
    expect(component.enrollForm.invalid).toBeTrue();
  });

  it('should flag course codes starting with XX', () => {
    component.enrollForm.get('courseId')?.setValue('XX101');
    expect(component.enrollForm.get('courseId')?.errors?.['noCourseCode']).toBeTrue();
  });

  it('should add and remove additional course controls', () => {
    component.addCourse();
    expect(component.additionalCourses.length).toBe(1);
    component.removeCourse(0);
    expect(component.additionalCourses.length).toBe(0);
  });
});
