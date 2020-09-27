import { IInputItem } from '@/types/form';
import { IColumn } from '@/types/table';
import moment from 'moment';
const formList: IInputItem[] = [
  {
    label: '用户名',
    name: 'username',
    type: 'input',
    value: '',
    // attrs: { disabled: true }
  },
  {
    label: '还款用户行',
    name: 'bank',
    type: 'search',
    value: '中国银行',
  },
  {
    label: '性别',
    name: 'gender',
    type: 'select',
    options: [],
    value: 'Jack',
    // attrs: { disabled: true }
  },
  {
    label: '出生日期',
    name: 'birth',
    type: 'date',
    value: moment(new Date()),
    // attrs: { disabled: true }
  },
  {
    label: '还款日期范围',
    name: 'repayDate',
    type: 'rangeDate',
    value: moment(new Date()),
  },
  {
    label: '还款时间',
    name: 'repayTime',
    type: 'time',
    value: moment(new Date()),
  },
  {
    label: '还款时间范围',
    name: 'repayTimeRange',
    type: 'rangeTime',
    value: moment(new Date()),
  },
  {
    label: '描述',
    name: 'descriptions',
    type: 'textarea',
    value: '恶魔妈妈木木木木',
  },
]

const tableList: IColumn[] = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'name',
    editable: true
  },
  {
    title: 'Age',
    dataIndex: 'Age',
    key: 'age',
    editable: true
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'address',
    editable: true
  },
  {
    title: 'Tags',
    key: 'Tags',
    dataIndex: 'tags',
    editable: true
  },
]

export default (options?: string) => {
  return {
    formList,
    tableList
  }
}