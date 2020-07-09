import React from 'react'
import * as msgs from '../redux/constants/ViewMessage'
import { ROOT_PATH } from '../mocks/mockListItems'

class Product extends React.Component {
  onClickThemCart(product_arg) {
    if (product_arg.inventory > 0) {
      this.props.themCart(product_arg)
      this.props.changeMsg(msgs.MSG_CREATE_OK)
    } else {
      this.props.changeMsg(msgs.MSG_INVENT_EMPTY)
    }
  }
  hienRating(sao_arg) {
    let kqTraVe = []
    sao_arg = (sao_arg > msgs.NUM_MAX_RATING) ? msgs.NUM_MAX_RATING : sao_arg
    for (let index = 1; index <= sao_arg; index++) {
      kqTraVe.push(<i key={index} className="fa fa-star" />)
    }
    for (let index = 1; index <= (msgs.NUM_MAX_RATING - sao_arg); index++) {
      kqTraVe.push(<i key={index + msgs.NUM_MAX_RATING} className="fa fa-star-o" />)
    }
    return kqTraVe
  }
  render() {
    let { product } = this.props
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} width="800" height="800" />
            <a href={ROOT_PATH}>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href={ROOT_PATH}>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {this.hienRating(product.rating)}
            </ul>
            <p className="card-text">
              {product.desc}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <br />
              <span className="left">Còn: {product.inventory} sản phẩm</span>
              <span className="right">
                <button
                  className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top"
                  title="true" data-original-title="Add to Cart" onClick={() => this.onClickThemCart(product)}>
                  <i className="fa fa-shopping-cart" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
