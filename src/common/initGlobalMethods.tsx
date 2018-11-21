/**
 * window上挂载全局方法
 */
import { Toast } from 'antd-mobile';

/**
 * 使window可以直接挂载属性
 */
// eslint-disable-next-line typescript/no-namespace
declare global {
    interface Window{
        [key: string]: any;
    }
}

window.$Toast = Toast;

/**
 * 生成唯一字符串
 */
window.$Key = (count?: number, prefix?: string): string => {
    const prefixs = prefix || '';
    let len: any = count;
    if (!count || (32 < count || count < 6)) {
        len = 6;
    }
    return prefixs + Math.random().toString(16).substr(2).slice(-(len - 2)) + (new Date()).getTime().toString(16).slice(9);
};