import GroupView from '@/widgets/groupView/ui/GroupView'
import React, { FC } from 'react'


const GroupViewScreen: FC<{id: number}> = ({id}) => {
  return (
    <GroupView id={id}/>
  )
}

export default GroupViewScreen