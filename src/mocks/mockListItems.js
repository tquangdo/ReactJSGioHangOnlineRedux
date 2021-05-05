export const ROOT_PATH = "/react-redux-giohang-online"
export const LOGIN_PATH = ROOT_PATH + "/login"
export const SPL_PATH = ROOT_PATH + "/sanpham-list"
export const SPL_ADD_PATH = ROOT_PATH + "/sanphamlist/add"
export const SPL_EDIT_PATH = ROOT_PATH + "/sanphamlist/:param_id/edit"
var menu_list_items = [
    {
        label: "Trang chủ",
        to: ROOT_PATH,
        exact: true
    },
    {
        label: "[Admin] Quản lí sản phẩm",
        to: SPL_PATH,
        exact: false
    }
]

export { menu_list_items }
