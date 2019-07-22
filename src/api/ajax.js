
/* 
1.封装既能函数ajax函数既能发get 请求 也能发post请求
2.收到的响应为response.data
3.统一处理异常信息

*/
import axios from 'axios'

function ajax (url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
        var promise 
        if(method==="GET"){
            
            promise = axios.get(url,{
                params:data
            })
        } else {
            promise = axios.post(url,data)
        }
        promise.then(
            response => {
                resolve(response.data)
            }
        )
        .catch(error=>{
            reject(error.message)
        })

    })
}


export default ajax