import React from 'react'
import { Link } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import { actionThemSPAPI, actionLaySPAPI, actionSuaSPAPI } from '../redux/actions/Action'
import { SPL_PATH } from '../mocks/mockListItems'

class ContaSanphamAction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txtID: '',
      txtName: '',
      txtImage: '',
      txtDesc: '',
      intPrice: '',
      intInventory: '',
      intRating: ''
    }
    this.txtThemSuaSP = 'Thêm sản phẩm'
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    let { txtID, txtName, txtImage, txtDesc, intPrice, intInventory, intRating } = this.state
    let { dispatch } = this.props
    let spReducer = {
      id: txtID,
      name: txtName,
      image: txtImage,
      desc: txtDesc,
      price: parseInt(intPrice),
      inventory: parseInt(intInventory),
      rating: parseInt(intRating)
    }
    if (txtID) {
      // UPDATE
      dispatch(actionSuaSPAPI(spReducer))
    } else {
      // INSERT
      dispatch(actionThemSPAPI(spReducer))
    }
    this.props.historyObj.goBack()
  }
  /**
   * click button "Sửa"
   * KO thể làm redux-form vì:
   * 1) const { invalid, submitting, handleSubmit, } = this.props làm UNSAFE_componentWillReceiveProps() chạy sai
   * 2) button "Thêm", "Sửa" là <Link to={path}>, KO phải normal kiểu onClick={func()}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.reduxprop_sp_desua) {
      let { reduxprop_sp_desua } = nextProps
      this.setState({
        txtID: reduxprop_sp_desua.id,
        txtName: reduxprop_sp_desua.name,
        txtImage: reduxprop_sp_desua.image,
        txtDesc: reduxprop_sp_desua.desc,
        intPrice: reduxprop_sp_desua.price,
        intInventory: reduxprop_sp_desua.inventory,
        intRating: reduxprop_sp_desua.rating
      })
      this.txtThemSuaSP = 'Sửa sản phẩm'
    }
  }
  componentDidMount() {
    let { matchObj } = this.props
    if (matchObj) {
      let { param_id } = matchObj.params
      let { dispatch } = this.props
      // SELECT
      dispatch(actionLaySPAPI(param_id))
    }
  }
  hamOnChange = (e) => {
    let { name } = e.target
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({ [name]: value })
  }
  render() {
    let { txtName, txtImage, txtDesc, intPrice, intInventory } = this.state
    return (
      <div>
        <div className="panel-heading"><h3>{this.txtThemSuaSP} </h3></div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSubmitForm} >
            <div className="form-group">
              <label>Tên sản phẩm:</label>
              <input type="text" className="form-control"
                name="txtName" value={txtName}
                onChange={this.hamOnChange}
                placeholder="Input tên sản phẩm..." />
            </div>
            <div className="form-group">
              <label>URL hình:</label>
              <textarea type="text" className="form-control"
                name="txtImage" value={txtImage}
                onChange={this.hamOnChange}
                placeholder="Input URL hình..."
                style={{ height: '80px' }}
              />
            </div>
            <div className="form-group">
              <label>Mô tả:</label>
              <input type="text" className="form-control"
                name="txtDesc" value={txtDesc}
                onChange={this.hamOnChange}
                placeholder="Input mô tả..." />
            </div>
            <div className="form-group">
              <label>Giá(*):</label>
              <input type="number" className="form-control"
                name="intPrice" value={intPrice}
                onChange={this.hamOnChange}
                placeholder="Input giá sản phẩm..." />
            </div>
            <div className="form-group">
              <label>Số hàng tồn kho(*):</label>
              <input type="number" className="form-control"
                name="intInventory" value={intInventory}
                onChange={this.hamOnChange}
                placeholder="Input số hàng tồn kho..." />
            </div>
            <Link to={SPL_PATH} className="btn btn-danger mr-10">
              Trở lại
          </Link>
            {" "}
            <button type="submit" className="btn btn-primary">Lưu</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      reduxprop_sp_desua: state.reducerSPDeSua
    }
  }
)(ContaSanphamAction)
