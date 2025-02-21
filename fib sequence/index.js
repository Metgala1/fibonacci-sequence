function fibs (n) {
   if (n <= 0) {
    return []
   }
   if (n === 1) {
    return [0]
   }
   const fibArray = [0 , 1];
   for (let i = 2; i < n; i++) {
    let nextFig = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextFig)
   }
   return fibArray
}
console.log(fibs(8))

function fibRecursive (n) {
    if (n <= 0) {
        return []
    }
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0,1]
    }

    const fibArray = fibRecursive(n -1)
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
}
console.log(fibRecursive(8))

