let timProductTrongCart = (product_arg, state_arg) => {
    let idx = -1
    if (state_arg.length > 0) {
        for (let index = 0; index < state_arg.length; index++) {
            if (state_arg[index].cart_product_arg.id === product_arg.id) {
                idx = index
                break
            }
        }
    }
    return idx
}

export {
    timProductTrongCart
}
