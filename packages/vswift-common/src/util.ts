/**
 * 常用公共方法
 */
import { throttle } from 'lodash'
import moment, { type MomentInput } from 'moment'

const $util = {
  undef(obj?: any) {
    return typeof obj === 'undefined'
  },
  /**
   * 有效值判断
   * 排除 undefined, null, 0, ''
   */
  isValid(obj: unknown) {
    if (typeof obj === 'undefined' || obj === null || obj === 0 || obj === '') return false
    else return true
  },
  /**
   * 窗口大小变化监听
   * @param callback 变化的回调函数
   */
  windowResize(callback: () => void) {
    window.addEventListener('resize', throttle(callback, 500))
  },
  /**
   * 简易倒计时
   * @param sec 倒计时总秒数
   * @param changeFun 每秒变化时的回调
   * @param doneFun 倒计时完成时的回调
   */
  countDown(sec: number, changeFun: (sec: number) => void, doneFun?: () => void) {
    const timer = setInterval(() => {
      if (sec--) {
        changeFun(sec)
      } else {
        if (doneFun) {
          doneFun()
        }
        clearInterval(timer)
      }
    }, 1000)
  },
  /**
   * 信息脱敏处理
   * @param str 需要脱敏的源数据，如果是number类型则会被转为string类型
   * @param startLen 起始长度
   * @param endLen 结束长度
   */
  desen(str: string | number, startLen: number, endLen: number) {
    const toStr = str + ''
    let len = toStr.length - startLen - endLen
    let xin = ''
    while (len > 0) {
      xin += '*'
      len--
    }
    return `${toStr.substring(0, startLen)}${xin}${toStr.substring(toStr.length - endLen)}`
  },
  /**
   * 根据key匹配对应的name
   * @param key 如：add
   * @param format 如：add:增加|edit:编辑
   */
  matchNameByKey(key: string, format: string) {
    try {
      const formats = format.trim().split('|')
      if (!formats.every(e => /^[a-zA-Z_]{1,}:\S{1,}/.test(e))) return '--'
      const kvArr = formats.map(e => e.split(':')) as [string, string][]
      const myMap = new Map(kvArr)
      return myMap.get(key)
    } catch (error) {
      console.error(error)
    }
  },
  /**
   * 日期格式化
   * @param inp - 待转换的日期时间
   * @param format - 时间格式
   */
  dateFormat(inp?: MomentInput, format?: string): string {
    if (!inp) return '--'
    return moment(inp).format(format || 'YYYY-MM-DD HH:mm:ss')
  },
  /**
   * 首字母大写
   * @param str 需要转的字符串
   * @returns string
   */
  capitalize(str: string) {
    return str.replace(/( |^)[a-z]/g, l => l.toUpperCase())
  }
}

export default $util
