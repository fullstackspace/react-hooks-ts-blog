import { IInputItem } from '@/types/form';
export const formList: IInputItem[] = [
  {
    label: '用户名',
    name: 'username',
    type: 'input',
    value: '',
    // attrs: { disabled: true }
  },
  {
    label: '性别',
    name: 'gender',
    type: 'select',
    options: [],
    value: '',
    // attrs: { disabled: true }
  },
  {
    label: '出生日期',
    name: 'birth',
    type: 'date',
    value: '',
    // attrs: { disabled: true }
  },
  {
    label: '还款日期范围',
    name: 'repayDate',
    type: 'rangeDate',
    value: '',
    attrs: ''
  },
  {
    label: '还款时间',
    name: 'repayTime',
    type: 'time',
    value: '',
    attrs: ''
  },
  {
    label: '还款时间范围',
    name: 'repayTimeRange',
    type: 'rangeTime',
    value: '',
    attrs: ''
  },
  {
    label: '描述',
    name: 'descriptions',
    type: 'textarea',
    value: '',
    attrs: ''
  },
]