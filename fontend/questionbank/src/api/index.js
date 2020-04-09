import ajax from './ajax'

const BASE=""

export const question=(title,content)=>{ajax(BASE+"/api/question",{title,content},"POST")}