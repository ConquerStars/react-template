import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, Toast} from 'antd-mobile'
import RenderInputItem from 'components/RenderInputItem'
import {dataCollection} from 'api/service'

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
            {id: Math.random(), }
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
          <List renderHeader={() => {
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

