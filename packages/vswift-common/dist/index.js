import { throttle as o } from "lodash";
import a from "moment";
const u = {
  undef(e) {
    return typeof e > "u";
  },
  /**
   * 有效值判断
   * 排除 undefined, null, 0, ''
   */
  isValid(e) {
    return !(typeof e > "u" || e === null || e === 0 || e === "");
  },
  /**
   * 窗口大小变化监听
   * @param callback 变化的回调函数
   */
  windowResize(e) {
    window.addEventListener("resize", o(e, 500));
  },
  /**
   * 简易倒计时
   * @param sec 倒计时总秒数
   * @param changeFun 每秒变化时的回调
   * @param doneFun 倒计时完成时的回调
   */
  countDown(e, t, r) {
    const n = setInterval(() => {
      e-- ? t(e) : (r && r(), clearInterval(n));
    }, 1e3);
  },
  /**
   * 信息脱敏处理
   * @param str 需要脱敏的源数据，如果是number类型则会被转为string类型
   * @param startLen 起始长度
   * @param endLen 结束长度
   */
  desen(e, t, r) {
    const n = e + "";
    let s = n.length - t - r, i = "";
    for (; s > 0; )
      i += "*", s--;
    return `${n.substring(0, t)}${i}${n.substring(n.length - r)}`;
  },
  /**
   * 根据key匹配对应的name
   * @param key 如：add
   * @param format 如：add:增加|edit:编辑
   */
  matchNameByKey(e, t) {
    try {
      const r = t.trim().split("|");
      if (!r.every((i) => /^[a-zA-Z_]{1,}:\S{1,}/.test(i)))
        return "--";
      const n = r.map((i) => i.split(":"));
      return new Map(n).get(e);
    } catch (r) {
      console.error(r);
    }
  },
  /**
   * 日期格式化
   * @param inp - 待转换的日期时间
   * @param format - 时间格式
   */
  dateFormat(e, t) {
    return e ? a(e).format(t || "YYYY-MM-DD HH:mm:ss") : "--";
  },
  /**
   * 首字母大写
   * @param str 需要转的字符串
   * @returns string
   */
  capitalize(e) {
    return e.replace(/( |^)[a-z]/g, (t) => t.toUpperCase());
  }
};
export {
  u as $util
};
