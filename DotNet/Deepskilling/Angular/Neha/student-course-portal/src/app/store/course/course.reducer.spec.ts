import { courseReducer, initialState } from './course.reducer';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

describe('courseReducer', () => {
  it('sets loading true on loadCourses', () => {
    const state = courseReducer(initialState, loadCourses());
    expect(state.loading).toBeTrue();
  });

  it('stores courses on loadCoursesSuccess', () => {
    const courses = [{ id: 1, name: 'X', code: 'C1', credits: 3, gradeStatus: 'passed' as const }];
    const state = courseReducer(initialState, loadCoursesSuccess({ courses }));
    expect(state.courses).toEqual(courses);
    expect(state.loading).toBeFalse();
  });

  it('stores error on loadCoursesFailure', () => {
    const state = courseReducer(initialState, loadCoursesFailure({ error: 'boom' }));
    expect(state.error).toBe('boom');
  });
});
