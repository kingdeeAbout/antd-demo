/**
 * Created by Administrator on 2018/2/2.
 */
import axios from 'axios'

const ajax = function (opt) {
    let promise = new Promise(function (resolve, reject) {
        if (axios) {
            if (opt.json) {
                opt.data = JSON.stringify(opt.data)
            }
            if (opt.async === undefined) {
                opt.async = true
            }

            axios({
                url: opt.url,
                data: opt.data,
                method: opt.method,
                withCredentials: true,
            }).then((res)=>{
                resolve(res.data);
                // if(res.data.rtnCode == 'biz_error_20002' ){
                //     router.push('/login')
                // }
            }, (err) => {
                reject(err);
            });
            // axios({
            //     dataType: 'json',
            //     async: opt.async,
            //     data: opt.data,
            //     url: opt.url,
            //     type: opt.method,
            //     beforeSend: function (request) {
            //         // 通常在HTTP协议里，客户端像服务器取得某个网页的时候，必须发送一个HTTP协议的头文件
            //         request.setRequestHeader('Accept-Language', 'zh-CN')
            //     },
            //     success: function (data) {
            //         resolve(data)
            //     },
            //     error: function (err) {
            //         if (reject) {
            //             reject(err)
            //         }
            //     }
            // })
        } else {
            reject('没有引入axios库，代码无法执行！')
        }
    })

    return promise
}

export default ajax