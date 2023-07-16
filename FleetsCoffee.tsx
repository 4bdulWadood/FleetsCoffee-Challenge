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

const map1 = new Map();

function firstNonRepeated(str){
    str2=str.toLowerCase();
    for(const char of str2){
        if(map1.get(char)!=undefined){
            map1.set(char, map1.get(char)+1);
        }else{
            map1.set(char, 0);
        }
    }

    try {
        return [...map1].filter(arr=>{
            if(arr[1] === 0){
                return arr[0];
            }
        })[0][0]
    
    }catch{
        return "";
    }

}

console.log(firstNonRepeated("hheellooS"))
