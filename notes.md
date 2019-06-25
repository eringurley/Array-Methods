#Array Method Chunks 

##Map 
1. Define a `mapped` array to return and return it
2. Iterate over `arr`
3. Call `callback` and add items to `mapped`

When we've returned an array, we are done.

##Filter
1. Define a `filtered` array to return and return it
2. Iterate over `arr`
3. If callback returns true, add it to `filtered`
4. Else, don't add it
5. Call `callback` and add items to `filtered`

##Find Index
1. It returns a number
2. Iterate over array if the item is good, return index
3. Else, continue
4. Return -1 if no matches found

##Reduce
1. Iterates through every item and invokes the `callback`
2. With an `initialValue` iterate throught the array and set the `accumulator` to the result of `callback`
3. Without an `initialValue` the `acc` starts off as the first item in array