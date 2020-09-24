import React, { FC } from 'react';
import { formList } from '@/model/userList';
import CommForm from '@/components/CommForm';
import './index.scss'

const EditorFormList: FC = () => {
  return (
    <div>
      <CommForm list={formList}></CommForm>
    </div>
  )
}

export default EditorFormList