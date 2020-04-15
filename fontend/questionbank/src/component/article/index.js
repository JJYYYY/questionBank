import React, { Component } from 'react'
import  { update } from "../../api"
import { Form, Button,Input} from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'



export default class Article extends Component {

    state={
        editorState:BraftEditor.createEditorState(null)
    }
handleClick=()=>{
    this.props.changeActiveIndex()
}
    
onFinish=values=>{
    let {title}=values
    title=`<h2>${title}</h2>`
    console.log(this.state.editorState)
    update(this.props.id,title,this.state.editorState.toHTML ? this.state.editorState.toHTML():this.state.editorState).then(()=>{
        this.props.changeActiveIndex()
    })
    
    }

    componentDidMount(){
        this.setState({editorState:BraftEditor.createEditorState(this.props.content)})
        this.handleChange(this.props.content)
    }

    handleChange=(content) =>{
        setTimeout(this.setState({editorState:content}),0)
     }


    render() {
        const editorProps={
            height: 300,
            contentFormat: 'raw',
            onChange:this.handleChange
        }
        return (
       
            <div className="content">
            <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
            initialValues={{
                title:this.props.title,
                content:BraftEditor.createEditorState(this.props.content),
            }
            }
        >
         <Form.Item
    name="title"
  >
    <Input />
  </Form.Item >
  <Form.Item name="content" >
              <BraftEditor {...editorProps} contentStyle={{height:"200px" ,overflow:"auto"}} controlBarStyle={{position:"sticky",top:"0"}}/>
              </Form.Item>
        <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    更新
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.handleClick}
                    style={{marginLeft:"20px"}}
                >
                    取消
                </Button>
            </Form.Item>
            </Form>
        </div>
        )
    }
}
