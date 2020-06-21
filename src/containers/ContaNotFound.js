import React from 'react'

class ContaNotFound extends React.Component {
  render() {
    return (
      <div className="alert alert-warning">
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <strong>404!</strong> KO tìm thấy trang!!!
      </div>
    )
  }
}

export default ContaNotFound
