var arr = [42, 27, 60, 18, 73, 22, 56];
console.log(arr);

// Bubble Sort
function selectionSort(list){
    let min;
    let temp;
    for(let i = 0; i < list.length; i++) {
        min = list[i];
        for(let j = i + 1; j < list.length; j++){
            if(min > list[j]){
                min = list[j];
                temp = list[i];
                list[i] = min;
                list[j] = temp;
            }
        }
    }

    return list;
}

console.log(selectionSort(arr));