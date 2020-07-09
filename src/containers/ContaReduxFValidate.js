const validate = values => {
    const err = {}
    if (!values.txtUsername) {
        err.txtUsername = 'Không được bỏ trống'
    }
    if (!values.txtPW) {
        err.txtPW = 'Mật khẩu không được bỏ trống'
    } else if (values.txtPW.trim().length < 5) {
        err.txtPW = 'Phải từ 5 ký tự trở lên'
    }
    return err
}

export default validate