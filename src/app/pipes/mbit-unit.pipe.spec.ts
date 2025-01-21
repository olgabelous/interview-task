import { TestBed } from '@angular/core/testing';
import { MbitUnitPipe } from './mbit-unit.pipe';

describe('MbitUnitPipe', () => {
  let pipe: MbitUnitPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MbitUnitPipe],
    });

    pipe = TestBed.inject(MbitUnitPipe);
  });

  it('should append "Mbit/s" to a number value', () => {
    const result = pipe.transform(100);
    expect(result).toBe('100 Mbit/s');
  });

  it('should append "Mbit/s" to a string value', () => {
    const result = pipe.transform('50');
    expect(result).toBe('50 Mbit/s');
  });

  it('should handle empty string input gracefully', () => {
    const result = pipe.transform('');
    expect(result).toBe(' Mbit/s');
  });
});
