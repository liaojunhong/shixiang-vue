import fetch from '../utils/request';

const API = {
    loginByPhone: function (param) {
        return fetch('/user/login_by_phone', 'post', param)
    },
    getIndustry: function (param) {
        return fetch('/industry/get_industry/', 'post', param)
    },
    getForgetPassword: function (param) {
        return fetch('/user/forget_password', 'post', param)
    },
    loginByWX: function (param) {
        return fetch("/user/login_by_wx/", 'post', param)
    },
    getArea: function (param) {
        return fetch('/area/get_area/', 'post', param)
    },
    getRegCode: function (param) {
        return fetch('/user/get_reg_code/', 'post', param)
    },
    updataCart: function (param) {
        return fetch('/cart/update_food/', 'post', param)
    },
    multipleUpdataCart: function (param) {
        return fetch('/cart/update_foods/', 'post', param)
    },
    firstRequest: function (param) {
        return fetch('/index/first_request/', 'post', param)
    },
    getOftenList: function (param) {
        return fetch('/food/often_buy/', 'post', param)
    },
    getFood: function (param) {
        return fetch('/cart/get_food/', 'post', param)
    }
}


export default API