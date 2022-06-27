var arr = [1, 3, 5, 7, 9];
console.log(arr);


// chen phan tu mang
function insertAndPrintArray(list, index, number){
    var n = list.length;
    var j = n -1;
    n = n + 1;
    while(j >= index){
        list[j+1] = list[j];
        j = j - 1;
    }
    list[index] = number;
    return list;
}

console.log(insertAndPrintArray(arr, 3, 6));



// xoa phan tu mang
function deleteAndPrintArray(list, index){
    var n = list.length;
    var j = index;
    while(j <= n){
        list[j-1] = list[j];
        j = j + 1;
    }
    list.length = list.length - 1;
    return list;
}

console.log(deleteAndPrintArray(arr, 3));



// tim kiem phan tu trong mang
function searchAndPrintArray(list, number){
    var index;
    for(let i = 0; i < list.length; i++) {
        if(list[i] == number){
            return i + 1;
        }
    }
    return "khong co phan tu do trong mang";
}

console.log(searchAndPrintArray(arr, 3));