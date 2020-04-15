import React, { Component } from 'react'
import  { questions } from "../../api"
import { Button} from 'antd';
import Article from '../article'
import './index.less'

export default class ViewAll extends Component {
    state={
        articles:[],
        activeIndex:-1,
    }

    showhtml=(htmlString)=>{
        var html = {__html:htmlString};
        return   <div dangerouslySetInnerHTML={html}></div> ;
    }

    handleEdit=(index)=>{
        setTimeout(() => {
            this.setState({activeIndex:index})},
            0)
    }

    handleDelete=(id)=>{
        questions(id).then(data=>{
            let result=this.state.articles.filter((item,index)=>{
                return item.id!==id
            })
            this.setState({articles:result})
        })

    }

 


    changeActiveIndex=()=>{
        questions().then(data=>{
            console.log("data",data)
            this.setState({
                articles:data.data,
                activeIndex:-1
            })
         })
    }

    renderTag=(item,index)=>{
        return (
            <div className="article" style={{border:"1px solid #000",marginTop:"20px"}} key={index}>
            {this.state.activeIndex===index ? 
            <Article id={item.id} title={item.title} content={item.content} changeActiveIndex={this.changeActiveIndex}></Article> 
                : ( 
                    <div style={{margin:5,backgroundColor:"#CCE8CF"}}>
                    <div className="header" style={{display:"flex",justifyContent: "space-between",fontSize:"16px"}}>
                    <h2 className="title" >{item.title}</h2>} <span className="update-time">{item.updateTime}</span></div>
                    <div className="content" style={{border:"1px solid #000",height:"300px",overflow:"auto"}}>{this.showhtml(item.content)}</div>
                    <div className="button">
                        <Button onClick={()=>this.handleEdit(index)}>编辑</Button>
                    </div></div>
                    )}
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
