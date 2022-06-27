var products = [
    {name : 'CPU', price: 750, quality: 10, categoryId: 1},
    {name : 'RAM', price: 50, quality: 2, categoryId: 2},
    {name : 'HDD', price: 70, quality: 1, categoryId: 2},
    {name : 'Main', price: 400, quality: 3, categoryId: 1},
    {name : 'Keyboard', price: 30, quality: 8, categoryId: 4},
    {name : 'Mouse', price: 25, quality: 50, categoryId: 4},
    {name : 'VGA', price: 60, quality: 35, categoryId: 3},
    {name : 'Monitor', price: 120, quality: 28, categoryId: 2},
    { name : 'Case', price: 120, quality: 28, categoryId: 5}
]

function findProduct(listProduct, nameProduct) {
    for(let i = 0; i < listProduct.length; i++) {
        if(nameProduct == listProduct[i].name) {
            return listProduct[i];
        }
    }
    return false;
}

console.log(findProduct(products, 'CPU'));