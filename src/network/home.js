import request from "./requets"

export function getHomeMultidata(){
  return request({
    url: '/api/v1/home/multidata'
    }
  )
}

