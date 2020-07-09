import React from 'react'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from '../mocks/mockListItems'

class SanPhamItem extends React.Component {
  render() {
    let { list } = this.props
    return (
      <tr>
        <td>{list.id} </td>
        <td>{list.name} </td>
        <td><img src={list.image} className="img-fluid" alt={list.name} width="150" height="50" /> </td>
        <td>{list.desc} </td>
        <td>{list.price} </td>
        <td>{list.inventory} </td>
        <td>
          <Link
            to={ROOT_PATH + `/sanphamlist/${list.id}/edit`}
            className="btn btn-success"
          >Sửa
          </Link>
          &nbsp;
          <button
            type="button" className="btn btn-danger" onClick={() => {
              if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
                // cmt out trên để fix lỗi "no-restricted-globals"
                this.props.xoaSPItem(list.id)
              }
            }}
          >Xóa</button>
        </td>
      </tr>
    )
  }
}

export default SanPhamItem
