import React from 'react'
import ContaTrangChu from "../containers/ContaTrangChu"
import ContaNotFound from "../containers/ContaNotFound"
import ContaSanphamList from "../containers/ContaSanphamList"
import ContaSanphamAction from '../containers/ContaSanphamAction'

var menu_list_items = [
    {
        label: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        label: "[Admin] Quản lí sản phẩm",
        to: "/sanpham-list",
        exact: false
    }
]
var route_items = [
    {
        path: "/",
        exact: true,
        component: () => <ContaTrangChu />
    },
    {
        path: "/sanpham-list", // PHẢI là "/sanpham-list", KO được là "/sanphamlist" để phân biệt với /add & /edit
        exact: false,
        component: () => <ContaSanphamList />
    },
    {
        path: "/sanphamlist/add",
        exact: false,
        component: ({ history }) => <ContaSanphamAction historyObj={history} />
    },
    {
        path: "/sanphamlist/:param_id/edit",
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