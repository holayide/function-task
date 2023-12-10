
function addNToEachElement(element, n) {
    for (let i = 0; i < element.length; i++) {
        element[i] += n;
    }
    return element;
}

console.log(addNToEachElement([1, 2, 3], 3));
console.log(addNToEachElement([3, 4, 5], 2)); 