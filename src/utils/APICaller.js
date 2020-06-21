import axios from 'axios'
import * as configConst from '../redux/constants/ConfigConst'

let callAPI = (endpoint_arg, method_arg = 'GET', body_arg) => {
    return axios({
        method: method_arg,
        url: `${configConst.API_URL}/${endpoint_arg}`,
        data: body_arg
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data)
            if (error.response.status === 500) {
                alert('Thêm sản phẩm NG!!! Lỗi thêm sản phầm bị trùng mã số.')
            } else {
                alert('Error!!! ' + error.message)
            }
        } else if (error.request) {
            console.log(error.request)
            alert('Error!!! ' + error.message)
        }
    })
}
export default callAPI