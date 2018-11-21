/**
 * 请求封装
 */
import { Toast } from 'antd-mobile';
import axios from 'axios';
import apis from './apis';

interface Config{
    errorIntercept?: boolean; // 错误提示（弹窗） 默认true
    needLoading?: boolean; // 请求时Loading 默认false
    loadingText?: string; // loading的文字提示 默认'加载中'
    mock?: boolean; // 是否需要mock数据（从yapi拉取） 默认false
}

/**
 *
 * @param {*} apiName apis文件中的key
 * @param {*} params 请求参数
 * @param {*} config 请求配置
 */
window.$fetch = (apiName: string, params: object = {}, config: Config = {}) => {
    const apiConfig = Object.assign({
        errorIntercept: true,
        needLoading: false,
        loadingText: '加载中',
        mock: false
    }, config);
    // 显示Loading
    if (apiConfig.needLoading) {
        Toast.loading(apiConfig.loadingText, 0);
    }
    const arr = apis[apiName].split(' ');
    if (apiConfig.mock) {
        arr[1] = 'http://xx' + arr[1];
    }
    let apiParam = {};
    switch (arr[0]) {
        case 'get':
            apiParam = { params };
            break;
        case 'post':
            apiParam = params;
    }
    return axios[arr[0]](arr[1], apiParam).then((res: any) => {
        apiConfig.needLoading && Toast.hide();
        // 后端错误提示
        if (apiConfig.errorIntercept && !res.data.success) {
            Toast.fail(res.data.message || res.data.errDesc);
            throw res.data;
        }
        if (res.data.success) {
            return res.data;
        }
        throw res.data;
    }).catch((errs: any) => {
        apiConfig.needLoading && Toast.hide();
        console.log(errs);
        if (typeof errs.success !== 'undefined') {
            throw errs;
        } else {
            /*eslint-disable*/
            throw { message: '服务器异常' };
        }
    });
};
