import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, Toast} from 'antd-mobile'
import RenderInputItem from 'components/RenderInputItem'
// import {dataCollection} from 'api/service'

import 'page/Detail.less'

class RenderForm extends React.Component{
  state = {
    formItem: []
  }
  fethCtrs(){
    if(this.props.match.params.id){
      Toast.loading('加载中...', 10)
      // dataCollection.fetchDetail(this.props.match.params.id).then(({data})=> {
      //   document.title = data.name || ''
      //   this.setState({
      //     formItem: data.controls
      //   })
      // }).finally(()=> {
      //   Toast.hide()
      // })
      setTimeout(()=>{
        this.setState({
          formItem: [
            {id: Math.random(), type: 'TEXT', title: '单行', required: true},
            {id: Math.random(), type: 'TEXTAREA', title: '多行'},
            {id: Math.random(), type: 'RADIO', title: '单选', content: '["男", "女"]'},
            {id: Math.random(), type: 'CHECKBOX', title: '多选', content: '["篮球", "唱", "跳", "RAP"]'},
            {id: Math.random(), type: 'DATETIME', title: '日期时间'},
            {id: Math.random(), type: 'DATE', title: '日期'},
            {id: Math.random(), type: 'TIME', title: '时间'},
            {id: Math.random(), type: 'FILE', title: '文件'},
            {id: Math.random(), type: 'VIDEO', title: '视频'},
            {id: Math.random(), type: 'IMAGE', title: '图片'},
          ]
        })
        Toast.hide()
      }, 500)
    }
  }
  updateValue(index, value){
    let formItem = [...this.state.formItem]
    formItem[index] && (formItem[index].value = value)
    this.setState({formItem})
  }
  validate(){

  }
  render(){
    return (
      <div className="form_detail">
        {this.state.formItem.map((item, index) =>
          <List className={(item.type==='FILE'||item.type==='IMAGE'||item.type==='VIDEO')?'no_bgc':''} renderHeader={() => {
              return <span>
                {item.title}
                {item.required?<span className="isRequired">*</span>:''}
                {item.type === 'CHECKBOX'?<span style={{opacity: 0.7}}>(多选)</span>:''}
              </span>
            }} key={item.id}>
            <RenderInputItem item={item} onChange={(v) => {this.updateValue(index, v)}} onBlur={() => { console.log('onBlur', item.value) }} />
          </List>
        )}
      </div>
    )
  }
  componentDidMount(){
    this.fethCtrs()
  }
}

export default withRouter(RenderForm)

