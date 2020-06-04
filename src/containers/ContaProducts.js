import React from 'react'
import Products from '../components/Products'
import Product from '../components/Product'
import PropTypes from 'prop-types'
import * as msgs from '../redux/constants/ViewMessage'
//Redux
import { connect } from 'react-redux'
import { actionThemCart, actionChangeMsg } from '../redux/actions/Action'

class ContaProducts extends React.Component {
  hienProducts(products_arg) {
    let kqTraVe = (
      <h2>{msgs.MSG_PRODUCT_EMPTY}</h2>
    )
    if (products_arg.length > 0) {
      kqTraVe = products_arg.map((item, chiso) => {
        return <Product
          key={chiso} product={item}
          themCart={this.props.themCart} // phải code kiểu connect(mapState2Props, mapDispatch2Props) chứ KO thể truyền dispatch(actionName()) vô đây!
          changeMsg={this.props.changeMsg}
        ></Product>
      })
    }
    return kqTraVe
  }
  render() {
    const { reduxprop_products } = this.props
    return (
      <Products>
        {this.hienProducts(reduxprop_products)}
      </Products>
    )
  }
}
ContaProducts.propTypes = {
  reduxprop_products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      rating: PropTypes.number
    })
  ),
  themCart: PropTypes.func,
  changeMsg: PropTypes.func
}

const mapState2Props = state => {
  return {
    reduxprop_products: state.reducerProducts
  }
}
const mapDispatch2Props = (dispatch) => {
  return {
    themCart: (them_cart_arg) => {
      dispatch(actionThemCart(them_cart_arg, 1))
    },
    changeMsg: (change_msg_arg) => {
      dispatch(actionChangeMsg(change_msg_arg))
    }
  }
}
export default connect(mapState2Props, mapDispatch2Props)(ContaProducts)

