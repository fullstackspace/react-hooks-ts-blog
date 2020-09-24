// 文本框类型定义
export type TInputType = 'input' | 'search' | 'textarea' | 'select' | 'time' | 'rangeTime' | 'date' | 'rangeDate' | 'text'
export type TPickerType = 'week' | 'month' | 'quarter' | 'year'
// options下拉框定义
interface IOptions {
  label: string;
  value: string | number;
}

interface IRules {
  required: boolean,
  message?: string,
  [propName: string]: any
}

// 表单字段定义
export interface IInputItem {
  label: string;
  name: string;
  type?: TInputType;
  value?: any;
  picker?: TPickerType;
  options?: IOptions[];
  rules?: IRules[],
  [propName: string]: any,// 扩展字段
}