import React from 'react'
import './App.less'

import { Button } from 'antd-mobile'
import axios from 'axios'

let getRequest = (params = {k: 'antd-mobile'}) => {
  axios.get(`/api/v1`, {params}).then(({data})=> {
    console.log(data)
  }).catch(err=> {
    console.log(err)
  }).finally(()=> {
    // do something
  })
}

function App() {
  return (
    <div className="App">
      <Button onClick={()=>getRequest()}>按钮</Button>
    </div>
  )
}

export default App;
