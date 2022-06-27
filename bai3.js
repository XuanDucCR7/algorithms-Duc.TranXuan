var arr = [1, 3, 5, 7, 9];
console.log(arr);

// tim kiem tuyen tinh

function searchList(list, number){
    for(i = 0; i < list.length; i++) {
        if(list[i] == number){
            return i + 1;
        }
    }
    return false;
}

console.log(searchList(arr, 3));