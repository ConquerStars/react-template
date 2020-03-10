import React from 'react'
import {InputItem} from 'antd-mobile'

class RenderInputItem extends React.Component{

  render(){
    let {item, onChange, onBlur} = this.props
    return (
      (item.type === 'TEXT' && <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />) ||
      (item.type === 'TEXT' && <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />) ||
      (item.type === 'TEXT' && <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />) ||
      (item.type === 'TEXT' && <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />) ||
      <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />
    )
  }
}

export default RenderInputItem

