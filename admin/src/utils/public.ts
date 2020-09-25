import { IInputItem } from '@/types/form';
import moment from 'moment';
const dateFormate = 'YYYY/MM/DD'
// 动态表单
export const computedFormList = (list: IInputItem[], filterArr: string[]) => {
  return list.filter(({ name }) => !filterArr.includes(name))
}

// formList中的value值的映射
export const getFormValue = (list: IInputItem[]) => {
  return list.reduce((pre: any, curr) => {
    const { name, names, value, children } = curr
    // 父级不包含value，则取子级
    if (typeof value === 'undefined' && Array.isArray(children)) {
      children.forEach(subItem => {
        const { name: subName, value: subValue } = subItem
        pre[subName] = formatInput(subValue, subName, list as [])
      })
    } else if (Array.isArray(names) && Array.isArray(value)) {
      // 将数组值传送到names字段对应的key中
      names.forEach((subName, index) => {
        pre[subName] = formatInput(value[index] || '', subName, list as [])
      })
      pre[name] = formatInput(value, name, list as [])
    } else {
      pre[name] = formatInput(value, name, list as [])
    }
    return pre
  }, {})
}

const formatInput = (val: any, name: string, list: []) => {
  if (Array.isArray(val) && val.length > 0) {
    return val.reduce((pre, curr) => {
      pre.push(formatInput(curr, name, list))
      return pre
    }, [])
  }
  if (val instanceof Date) {
    val = moment(val, dateFormate)
  }
  return val
}