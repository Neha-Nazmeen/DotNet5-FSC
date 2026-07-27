import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

describe('CourseListComponent', () => {
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' as const }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
          selectors: [
            { selector: selectAllCourses, value: mockCourses },
            { selector: selectCoursesLoading, value: false },
            { selector: selectCoursesError, value: null }
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create and render course cards from the store', () => {
    expect(fixture.componentInstance).toBeTruthy();
    const cards = fixture.nativeElement.querySelectorAll('app-course-card');
    expect(cards.length).toBe(1);
  });

  it('should show loading indicator when loading state is true', () => {
    store.overrideSelector(selectCoursesLoading, true);
    store.refreshState();
    fixture.detectChanges();
    const loadingText = fixture.nativeElement.textContent;
    expect(loadingText).toContain('Loading courses');
  });
});
