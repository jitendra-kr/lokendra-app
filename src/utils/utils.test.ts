import { convertNumberToWords } from "./utils";


describe('convertNumberToWords', () => {
  it('should convert numbers to words correctly', () => {
    // Test cases for numbers up to a trillion
    expect(convertNumberToWords(0)).toBe('zero');
    expect(convertNumberToWords(1)).toBe('one');
    expect(convertNumberToWords(10)).toBe('ten');
    expect(convertNumberToWords(16)).toBe('sixteen');
    expect(convertNumberToWords(20)).toBe('twenty');
    expect(convertNumberToWords(100)).toBe('one hundred');
    expect(convertNumberToWords(456)).toBe('four hundred fifty-six');
    expect(convertNumberToWords(1000)).toBe('one thousand');
    expect(convertNumberToWords(1682)).toBe('one thousand six hundred eighty-two');
    expect(convertNumberToWords(1000000)).toBe('one million');
    expect(convertNumberToWords(123456789)).toBe('one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine');
    expect(convertNumberToWords(1000000000)).toBe('one billion');
    expect(convertNumberToWords(987654321012)).toBe('nine hundred eighty-seven billion six hundred fifty-four million three hundred twenty-one thousand twelve');
    expect(convertNumberToWords(1000000000000)).toBe('one trillion');
    expect(convertNumberToWords(1234567890123)).toBe('one trillion two hundred thirty-four billion five hundred sixty-seven million eight hundred ninety thousand one hundred twenty-three');
  });

  it('should handle large numbers gracefully', () => {
    expect(convertNumberToWords(9999999999999999)).toBe('Number is too large to convert.');
  });
});
