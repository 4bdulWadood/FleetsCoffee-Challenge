function firstNonRepeated(s: string): string {
  const freqMap: {[key: string]: number} = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Find the first non-repeated character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (freqMap[char] === 1) {
      return char;
    }
  }

  // If there is no non-repeated character, return an empty string
  return '';
}