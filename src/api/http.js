import axios from 'axios'

const API_PREFIX="http://panda.rainspace.cn:8001/"


export async function httpGet(url, params, postType = '') {
  const { data: body } = await axios({
    method: 'get', url: `${API_PREFIX}${url}`, data: params,
    headers: { 'Content-Type': 'application/json;' }
  })
  
  const { code, data, message: msg } = body
  if(code!==0) {
      throw msg || false;
  }
  if (code === 0) {
    return data || true
  }
  // 统一输出报错信息
  
  
}


export async function httpPost(url, params, postType = '') {
    const { data: body } = await axios({
      method: 'post', url: `${API_PREFIX}${url}`, data: params,
      headers: { 'Content-Type': 'application/json;' }
    })
    
    const { code, data, message: msg } = body
    if(code!==0) {
        throw msg || false;
    }
    if (code === 0) {
      return data || true
    }
    // 统一输出报错信息
    
    
  }
  