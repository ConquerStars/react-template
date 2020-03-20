import React from 'react'
import empty from 'assets/empty.png'

class Empty extends React.Component{

  render(){
    return (
      <div className="no_data">
        <img src={empty} alt="" />
        <p>暂无数据</p>
      </div>
    )
  }
}

export default Empty
