import { CreditLabelPipe } from './credit-label.pipe';

describe('CreditLabelPipe', () => {
  const pipe = new CreditLabelPipe();

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('handles 1 credit', () => expect(pipe.transform(1)).toBe('1 Credit'));
  it('handles multiple credits', () => expect(pipe.transform(3)).toBe('3 Credits'));
  it('handles null/0 as No Credits', () => {
    expect(pipe.transform(null)).toBe('No Credits');
    expect(pipe.transform(0)).toBe('No Credits');
  });
});
