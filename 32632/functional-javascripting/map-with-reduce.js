module.exports = function arrayMap(arr, fn) 
{
    return arr.reduce(function(acc,curr, thisArg)
    {
        acc.push(fn.call(thisArg,curr))
        return acc
    },[])
}