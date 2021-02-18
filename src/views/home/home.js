
import { request } from '../../network/request'

export function getHomeata() {
    return request().get("/home/multidata")
}