function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];

    const leftSide = [];
    const rightSide = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            rightSide.push(arr[i])
        } else {
            leftSide.push(arr[i])
        }
    }

    return quickSort(leftSide).concat([pivot], quickSort(rightSide));
}