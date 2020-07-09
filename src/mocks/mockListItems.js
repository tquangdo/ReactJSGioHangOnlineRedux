import React from 'react'
import ContaTrangChu from "../containers/ContaTrangChu"
import ContaNotFound from "../containers/ContaNotFound"
import ContaSanphamList from "../containers/ContaSanphamList"
import ContaSanphamAction from '../containers/ContaSanphamAction'

export const ROOT_PATH = "/ReactJSGioHangOnlineRedux"
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
var route_items = [
    {
        path: ROOT_PATH,
        exact: true,
        component: () => <ContaTrangChu />
    },
    {
        path: SPL_PATH, // PHẢI là "/sanpham-list", KO được là "/sanphamlist" để phân biệt với /add & /edit
        exact: false,
        component: () => <ContaSanphamList />
    },
    {
        path: SPL_ADD_PATH,
        exact: false,
        component: ({ history }) => <ContaSanphamAction historyObj={history} />
    },
    {
        path: SPL_EDIT_PATH,
        exact: false,
        component: ({ match, history }) => <ContaSanphamAction matchObj={match} historyObj={history} />
    },
    // PHẢI để <ContaNotFound> sau cùng, nếu ko dù exact=true vẫn NG!!!
    {
        path: "",
        exact: false,
        component: () => <ContaNotFound />
    }
]

export { menu_list_items, route_items }