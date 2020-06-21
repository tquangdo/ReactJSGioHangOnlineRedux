let timIndexOfArr = (arr_arg, id_arg, is_cart_arg = true) => {
    let idx = -1
    arr_arg.every((item, i) => {
        if (is_cart_arg) {
            if (id_arg === item.cart_product_arg.id) {
                idx = i
                return false
            } else return true
        } else {
            if (id_arg === item.id) {
                idx = i
                return false
            } else return true
        }
    })
    return idx
}

export {
    timIndexOfArr
}

