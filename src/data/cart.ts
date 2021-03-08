let cartList:any = []

function addCart(newProd){
    let id = 0
    cartList.forEach(prod => {
        prod.id >= id ? id++ : ''
    })
    newProd.id = id
    cartList = [...cartList, newProd]
}

function putCart(id, data){
    cartList = cartList.map(prod => {
        prod.id == id ? (data.id = id, prod = data  ) : ''
        return prod
    })
}

function delCart(data){
    cartList.forEach((prod, i) => {
        prod.id == data ? (delete cartList[i]) : ''
    })
}

export {cartList, addCart, putCart, delCart}