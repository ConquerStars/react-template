import React from 'react'
import {InputItem, TextareaItem, Picker, Checkbox, DatePicker, ImagePicker, List} from 'antd-mobile'

class RenderInputItem extends React.Component{

  render(){
    let {item, onChange, onBlur} = this.props
    // let type = item.type
    let type = 'IMAGE'
    let handlerCheckBoxChange = (v, isChecked, item)=>{
      if(isChecked){ // 选中
        if(item.value && item.value instanceof Array){
          item.value.push(v)
        } else {
          item.value = [v]
        }
      } else {
        item.value.splice(item.value.findIndex(i => i === v), 1)
      }
      onChange(item.value)
    }
    let imgChange = (files, type, index)=> {
      console.log(files, type, index)
    }

    let input = <InputItem clear value={item.value} onChange={onChange} onBlur={onBlur} />
    if(type === 'TEXTAREA') input = <TextareaItem clear value={item.value} onChange={onChange} onBlur={onBlur} rows={2} autoHeight />
    else if (type === 'RADIO') {
      let data = []
      JSON.parse(item.content).forEach(i=>{
        data.push({label: i, value: i})
      })
      input = <Picker clear value={item.value} onChange={onChange} onBlur={onBlur} data={data} cols={1}>
        <List.Item arrow="horizontal">请选择</List.Item>
      </Picker>
    }
    else if (type === 'CHECKBOX') {
      input = [
        JSON.parse(item.content).map(i=>(
          <Checkbox.CheckboxItem key={i} onChange={(v)=>{handlerCheckBoxChange(i, v.target.checked, item)}}>{i}</Checkbox.CheckboxItem>
        ))
      ]
    } else if (type === 'DATETIME') {
      input = <DatePicker mode="datetime" minDate={new Date('1900-1-1 00:00:00')} maxDate={new Date('2199-12-31 23:59:59')} onOk={v=> console.log(v)}>
        <List.Item arrow="horizontal"> </List.Item>
      </DatePicker>
    } else if (type === 'DATE') {
      input = <DatePicker mode="date" minDate={new Date('1900-1-1')} maxDate={new Date('2199-12-31')} onOk={v=> console.log(v)}>
        <List.Item arrow="horizontal"> </List.Item>
      </DatePicker>
    } else if (type === 'TIME') {
      input = <DatePicker mode="time" minDate={new Date(2000,3,1,0,0,0)} maxDate={new Date(2000,3,1,23,59,59)} onOk={v=> console.log(v)}>
        <List.Item arrow="horizontal"> </List.Item>
      </DatePicker>
    } else if (type === 'IMAGE') {
      input = <ImagePicker onChange={imgChange} />
    }
    return input
  }
}

export default RenderInputItem

