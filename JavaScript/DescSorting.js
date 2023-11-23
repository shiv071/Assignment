function descendingSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

let inputArray = [5, 2, 9, 1, 5, 6];
descendingSort(inputArray);
console.log(inputArray);
