import axios from 'axios'

export function request(){
    // 创建实例
    return axios.create({
        baseURL: 'http://123.207.32.32:8000'
    })
}

