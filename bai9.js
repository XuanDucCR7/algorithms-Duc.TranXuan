var arr = [42, 27, 60, 18, 73, 22, 56];
console.log(arr);

// Insertion Sort
function insertionSort(list){

    let n = list.length;
        for (let i = 1; i < n; i++) {
            let temp = list[i];
            let j = i-1; 
            while ((j > -1) && (temp < list[j])) {
                list[j+1] = list[j];
                j--;
            }
            list[j+1] = temp;
        }
    return list;
}

console.log(insertionSort(arr));