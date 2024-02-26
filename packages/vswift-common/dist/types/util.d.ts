import { type MomentInput } from 'moment';
declare const $util: {
    undef(obj?: any): boolean;
    /**
     * 有效值判断
     * 排除 undefined, null, 0, ''
     */
    isValid(obj: unknown): boolean;
    /**
     * 窗口大小变化监听
     * @param callback 变化的回调函数
     */
    windowResize(callback: () => void): void;
    /**
     * 简易倒计时
     * @param sec 倒计时总秒数
     * @param changeFun 每秒变化时的回调
     * @param doneFun 倒计时完成时的回调
     */
    countDown(sec: number, changeFun: (sec: number) => void, doneFun?: () => void): void;
    /**
     * 信息脱敏处理
     * @param str 需要脱敏的源数据，如果是number类型则会被转为string类型
     * @param startLen 起始长度
     * @param endLen 结束长度
     */
    desen(str: string | number, startLen: number, endLen: number): string;
    /**
     * 根据key匹配对应的name
     * @param key 如：add
     * @param format 如：add:增加|edit:编辑
     */
    matchNameByKey(key: string, format: string): string | undefined;
    /**
     * 日期格式化
     * @param inp - 待转换的日期时间
     * @param format - 时间格式
     */
    dateFormat(inp?: MomentInput, format?: string): string;
    /**
     * 首字母大写
     * @param str 需要转的字符串
     * @returns string
     */
    capitalize(str: string): string;
};
export default $util;
