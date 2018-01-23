console.log("Hello Yash..");
module.exports = function(numbToSum)
{
    var sum = 0, 
    i = 0, 
    l = numbToSum.length;
    while (i < l) {
        sum += numbToSum[i++]
    }
    return sum
}