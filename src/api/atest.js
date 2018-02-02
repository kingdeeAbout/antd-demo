/**
 * Created by Administrator on 2018/2/2.
 */
import ajax from '../libs/ajax'

class atest {
    gettext (data) {
        return new Promise(function (resolve, reject) {
            ajax({
                url: 'http://localhost:3001/mock/test.json',
                json: false,
                data: data,
                method: 'GET'
            }).then(function (data) {
                resolve(data)
            })
        })
    }
}

export default atest