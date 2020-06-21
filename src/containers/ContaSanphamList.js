import React from 'react'
import SanPhamItem from '../components/SanPhamItem'
import { Link } from 'react-router-dom'
import SanPhamList from '../components/SanPhamList'
//Redux
import { connect } from 'react-redux'
import { actionHienSPAPI, actionXoaSPAPI } from '../redux/actions/Action'

class ContaSanphamList extends React.Component {
  componentDidMount() {
    // SELECT
    let { dispatch } = this.props
    dispatch(actionHienSPAPI())
  }
  xoaSanPhamItem = (id_arg) => {
    // DELETE
    let { dispatch } = this.props
    dispatch(actionXoaSPAPI(id_arg))
  }
  hienSanPhamItem = (list_arg) => {
    let kqTrave = null
    if (list_arg.length > 0) {
      kqTrave = list_arg.map((list, chiso) => {
        return (
          <SanPhamItem
            key={chiso} list={list}
            xoaSPItem={this.xoaSanPhamItem}
          />
        )
      })
    }
    return kqTrave
  }
  render() {
    let { reduxprop_splist } = this.props
    return (
      <div>
        <Link to="/sanphamlist/add" className="btn btn-info" >Thêm sản phẩm</Link>
        <br /><br />
        <SanPhamList>{this.hienSanPhamItem(reduxprop_splist)}</SanPhamList>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      reduxprop_splist: state.reducerProducts
    }
  }
)(ContaSanphamList)
