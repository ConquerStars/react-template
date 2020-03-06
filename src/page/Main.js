import React from 'react'
import { Grid, Toast } from 'antd-mobile'

class Tplist extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id: 1, title: '假装是模板数据', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'},
        {id: 2, title: '身体健康调查表'},
        {id: 3, title: '疫情期间体温上报'},
        {id: 4, title: '民意调查问卷'},
      ]
    }
  }
  goDetail (obj) {
    console.log(obj)
  }
  render(){
    return (
      <div className="template_list">
        <Grid data={this.state.data} onClick={this.goDetail} columnNum={3} renderItem={_el=> (
          <div>
            {_el.icon?
              <div className="badge_img"style={{backgroundImage: `url(${_el.icon})`}} />:
              <div className="badge">{_el.title.slice(0,2)}</div>
            }
            <div className="tp_title">
              <span>{_el.title}</span>
            </div>
          </div>
        )} />
      </div>
    )
  }
  componentDidMount(){
    Toast.loading('加载中...', 10, () => {
      console.log('Load complete !!!')
    })
    setTimeout(()=> {
      Toast.hide()
    }, 500)
  }
}

export default ()=> {
  return (
    <Tplist />
  )
}
