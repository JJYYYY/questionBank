import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import Edit from '../edit'
import ViewAll from '../viewAll'
import './index.less'

const { Header, Content, Footer } = Layout;

export default class Home extends Component {
  state={
    activeIndex:1,
  }


  handleClick=(index)=>{
    this.setState({
      activeIndex:index
    })
  }
    render() {
        return (
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" onClick={()=>this.handleClick(1)}>主页</Menu.Item>
                <Menu.Item key="2" onClick={()=>this.handleClick(2)}>查看所有</Menu.Item>
              </Menu>
            </Header>
            { this.state.activeIndex===1 ? <Content style={{ padding: '0 50px' }}>
                <Edit />
            </Content> :
            <Content style={{ padding: '0 50px' }} >
                <ViewAll />
            </Content>} 
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by BXZ</Footer>
          </Layout>
        )
    }
}
