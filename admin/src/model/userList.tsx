import { IInputItem } from '@/types/form';
export const formList: IInputItem[] = [
  {
    label: '用户名',
    name: 'username',
    type: 'input',
    value: '123',
    required: true,
    // attrs: { disabled: true }
  },
  {
    label: '还款用户行',
    name: 'bank',
    type: 'search',
    value: '',
    required: true,
  },
  {
    label: '性别',
    name: 'gender',
    type: 'select',
    options: [],
    value: 'Jack',
    required: true,
    // attrs: { disabled: true }
  },
  {
    label: '出生日期',
    name: 'birth',
    type: 'date',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '还款日期范围',
    name: 'repayDate',
    type: 'rangeDate',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '还款时间',
    name: 'repayTime',
    type: 'time',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '还款时间范围',
    name: 'repayTimeRange',
    type: 'rangeTime',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '描述',
    name: 'descriptions',
    type: 'textarea',
    value: '',
    attrs: { disabled: true }
  },
]