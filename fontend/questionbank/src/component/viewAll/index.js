import React, { Component } from 'react'
import  { questions } from "../../api"
import { Button } from 'antd';
import './index.less'

export default class ViewAll extends Component {
    state={
        articles:[]
    }

    showhtml=(htmlString)=>{
        var html = {__html:htmlString};
        return   <div dangerouslySetInnerHTML={html}></div> ;
    }

    handleEdit=(index)=>{
        this.props.changeSelectedKeys()
    }

    handleDelete=(id)=>{
        questions(id).then(data=>{
            let result=this.state.articles.filter((item,index)=>{
                return item.id!==id
            })
            this.setState({articles:result})
        })

    }
    renderTag=(item,index)=>{
        return (
            <div className="article" style={{border:"1px solid #000",marginTop:"20px"}} key={index}>
                <div className="header" style={{display:"flex",justifyContent: "space-between",fontSize:"16px"}}><h2 className="title">{item.title}</h2><span className="update-time">{item.updateTime}</span></div>
        <div className="content">{this.showhtml(item.content)}</div>
        <div className="button"><Button onClick={()=>this.handleEdit(item.id)}>编辑</Button>
        {/* <Button style={{marginLeft:"30px"}} onClick={()=>this.handleDelete(item.id)}>删除</Button> */}
        </div>
            </div>
        )
    }

    componentDidMount(){
        questions().then(data=>{
           this.setState({
               articles:data.data
           })
        })

       
    }

    render() {
        return (
            <div className="articles">
                {this.state.articles ? this.state.articles.map((item,index)=>{
                   return this.renderTag(item,index)
                }) : ""}
            </div>
        )
    }
}
