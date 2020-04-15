import React, { Component } from 'react'
import { Form, Input, Button} from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import {question} from "../../api"

export default class Edit extends Component {
    state={
        editorState:BraftEditor.createEditorState(null)
    }
    //   handleHtmlChange = (rawContent) => {
    //     console.log(rawContent)
    //   }
      handleChange=(content) =>{
         this.setState({editorState:content})
      }


      onFinish=values=>{
          let {title}=values
          title=`<h2>${title}</h2>`
          question(title,this.state.editorState.toHTML())
          values.title=""
          values.content=""
          }

    render() {
        const editorProps={
            value:this.state.editorState,
            height: 500,
            contentFormat: 'raw',
            initialContent: '<p>欢迎使用</p>',
            onChange:this.handleChange
        }
        return (
            <div className="content" style={{backgroundColor:"#CCE8CF"}}>
                <Form
				name="normal_login"
                className="login-form"
                onFinish={this.onFinish}
			>
             <Form.Item
        label="题目"
        name="title"
      >
        <Input />
      </Form.Item>
             <BraftEditor {...editorProps} contentStyle={{height:"500px" ,overflow:"auto"}} controlBarStyle={{position:"sticky",top:"0"}}/>
            <Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						提交
					</Button>
				</Form.Item>
                </Form>
            </div>
        )
    }
}
