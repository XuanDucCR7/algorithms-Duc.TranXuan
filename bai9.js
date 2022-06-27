var arr = [42, 27, 60, 18, 73, 22, 56];
console.log(arr);

// Bubble Sort
function insertionSort(list){
    for(let i = 0; i < list.length; i++) {
        for(let j = i; j > 0; j--){
            if(list[j] < list[j-1]){
                let temp = list[j];
                list[j] = list[j-1];
                list[j-1] = temp;
            }
            else break;
        }
    }

    return list;
}

console.log(insertionSort(arr));