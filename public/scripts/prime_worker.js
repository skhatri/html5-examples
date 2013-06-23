function isDivisible(i) {
    var foundDivisible = false;
    for (var j = 2; j <= i / 2; j += 1) {
        if (i % j === 0) {
            foundDivisible = true;
            break;
        }
    }
    return foundDivisible;
}

self.addEventListener('message', function (e) {
    var lastPrime = parseInt(e.data);
    var newPrime = 0;
    //TODO write code to calculate newPrime number that is greater than the lastPrime
    newPrime = lastPrime;

    //TODO we will use the loop from lastPrime to twice its value.
    //Write the code for the below pseudo code.
    for (var i = lastPrime + 1; i < lastPrime * 2; i += 1) {
        /**
         * if i is not isDivisible then
         *  newPrime = i
         *  break
         *
         */
    }
    self.postMessage(String(newPrime));
}, false);