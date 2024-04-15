import { Input } from 'antd'
import React from 'react'

const loginForm = () => {
  return (
    <div>
      <Input placeholder='логин'/>
      <Input.Password placeholder="input password" />
    </div>
  )
}

export default loginForm