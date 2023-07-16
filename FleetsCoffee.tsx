
//Write a function that takes in a string, and returns the first non-repeated character
//In the string. If there is no non-repeated character, return an empty string.

//In most programming languages, character comparisons are case-sensitive
//So we must convert the string to lowercase or uppercase, so they are not misunderstood by the hashmap as different keys.
//to make sure comparison can happen without error, we can convert a string to lower or upper case.

//This is a classic example of a hashmap:
//Setup a key - value pair, where the character is the key and the value is the number of times the character occurs.
//Check value of key - value pair data structure
//Objects aren't ordered in JS, hence, we have to use another data structure for the hashmap.
//The Map Object in JS holds key-value pairs and remembers the original insertion order of the keys.
//We can use the Map Object!

const map1: Map<string, number> = new Map();

function firstNonRepeated(str: string): string {
  const str2: string = str.toLowerCase();
  
  for (const char of str2) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char)! + 1);
    } else {
      map1.set(char, 0);
    }
  }

  try {
    const nonRepeatedChar: string | undefined = [...map1].filter(([char, count]) => {
      return count === 0;
    })[0][0];

    return nonRepeatedChar || "";
  } catch {
    return "";
  }
}

console.log(firstNonRepeated("bob"));
