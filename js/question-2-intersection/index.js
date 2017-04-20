/**
 * QUESTION 2
 * ==========
 *
 * Complete the function 'findIntersection' below to find the intersection of two arrays. An intersection would be
 * the common elements that exists within both arrays. In this case, make sure that the elements returned are
 * also unique!
 *
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function findIntersection (arr1, arr2) {
    
    var result = [];
    var merged = arr1.filter(function(i){
        return arr2.indexOf(i) >-1;
    });

    merged.forEach(function(i) {
        if(result.indexOf(i) == -1)
            result.push(i);            
    }, this);

    return result;
}

var intersection = findIntersection(firstArray, secondArray);
console.log(intersection);
