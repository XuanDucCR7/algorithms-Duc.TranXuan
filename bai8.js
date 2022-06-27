var arr = [5, 27, 18, 60, 73];
console.log(arr);

// Bubble Sort
function bublleSort(list){
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length - i - 1; j++){
            if(list[j] > list[j+1]){
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }

    return list;
}

console.log(bublleSort(arr));