import ajax from './ajax'

const BASE=""

export const question=(title,content)=>{return ajax(BASE+"/api/question",{title,content},"POST")}

export const questions=(id)=>{return ajax(BASE+"/api/questions",{id},"POST")}

export const update=(id,title,content)=>{return ajax(BASE+"/api/update",{id,title,content},"POST")}