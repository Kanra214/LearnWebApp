import { AbstractPipe } from './abstract.pipe';

describe('AbstractPipe', () => {
  it('create an instance', () => {
    const pipe = new AbstractPipe();
    expect(pipe).toBeTruthy();
  });
  it('should omit content with ... if string exeeds limit', () => {
    const result = new AbstractPipe().transform("abcdefg", 3);
    expect(result).toBe("abc...");
  });
});


