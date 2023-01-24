function twoSumSort(arr, target) {
    arr.sort((a,b) => a - b);

    console.log(arr);

    let left = 0;
    let right = arr.length-1;

    while (right > left) {
        if ((arr[left] + arr[right]) === target) {
            return true;
        } else if ((arr[left] + arr[right]) < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

console.log(twoSumSort([0, 1, 2, 3, 7], 5)); // true