import React from 'react'
import { Button } from 'antd-mobile'

let logpage = (history) => {
  history.push('/')
}

let back = (history) => {
  history.goBack()
}

export default ({ history })=> {
  return (
    <div>
      <Button onClick={()=>logpage(history)}>跳转到主页</Button>
      <Button onClick={()=>back(history)}>返回</Button>
    </div>
  )
}

