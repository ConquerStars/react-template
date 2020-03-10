import axios from 'axios'
axios.defaults.baseURL = '/api/v1'
axios.defaults.headers = { 'Device-Type': 'win32'}
axios.defaults.crossDomain = true
axios.defaults.withCredentials = true

let Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiSkdHTFkiLCJKU0RDRyIsIldDU0paWSIsIlpDWlhHIiwiWkZZIiwiWlhTSkdMWSJdLCJpc3MiOiJkaC1kYXRhLmNvbSIsInBpY3R1cmUiOiJodHRwOi8vYXZhdGFyLmppY2hhLW9ubGluZS5vcmcvYXZhdGFyL2RlZmF1bHQucG5nIiwicmVhbE5hbWUiOiLliJjli4ciLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwic3lzdGVtIjoxMDEwMCwicGhvbmVOdW1iZXIiOiIxMzgyNTI0NTQ2MiIsInBob25lTnVtYmVyVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE1ODM4MTI5NjEsImp0aSI6IjA1YTc3NGVjZTcwZTQ2MmQ4YWZhNWYzNmYyYTc4ZDYxIiwiZW1haWwiOiJ5b25nbGl1QGRoLWRhdGEuY29tIiwidXNlcm5hbWUiOiJ5b29vbmcifQ.K8sgVImdu7cJn-lf5REXIQORbeNlS3W5wnREhb4ksUU'
// try {
//   Authorization = native.getData("JWT") || ''
// } catch (e) {
//   console.log(e)
// }

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = Authorization // 设置token
  config['x-date'] = Date.now() // 设置请求的发起时间
  return config
})

let dataCollection = {
  fetchList(params){ // 获取模板列表
    return axios.get(`/collection/templates/pager`, {params})
  },
  fetchDetail(id){ // 获取表单详情
    return axios.get(`/collection/templates/${id}`)
  },
  getToken(params){ // 获取七牛云token
    return axios.get(`/enforcements/token`, {params})
  },
  subReport(p){ // 提交收集表
    return axios.post(`/collection/reports`, p)
  },
}

export {
  dataCollection,
}
