function bubbleSort(arr) {
    for (let outer = 0; outer < arr.length - 1; outer++) {
        let sorted = true;

        for (let inner = 0; inner < arr.length - 1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                const temp = arr[inner + 1];
                arr[inner + 1] = arr[inner];
                arr[inner] = temp;
                sorted = false;
            }
        }

        if (sorted) {
            break;
        }
    }
}
