import axios from 'axios'
axios.defaults.baseURL = '/api/v1'
axios.defaults.headers = { 'Device-Type': 'win32'}
axios.defaults.crossDomain = true
axios.defaults.withCredentials = true

let Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzIiwicm9sZXMiOlsiWkNaWEciXSwiaXNzIjoiZGgtZGF0YS5jb20iLCJwaWN0dXJlIjoiaHR0cDovL2F2YXRhci5qaWNoYS1vbmxpbmUub3JnL2F2YXRhci9kZWZhdWx0LnBuZyIsInJlYWxOYW1lIjoi5byg6IGqIiwiZW1haWxWZXJpZmllZCI6ZmFsc2UsInN5c3RlbSI6MTAxMDAsInBob25lTnVtYmVyIjoiMTM1ODA1OTc3NDciLCJwaG9uZU51bWJlclZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNTg0NTkwNDkwLCJqdGkiOiI0YWU0NWIzNzYxZWE0YWYyYTQwYmZlN2VlNjYyY2JmNiIsImVtYWlsIjoiY29uZ3poYW5nQGRoLWRhdGEuY29tIiwidXNlcm5hbWUiOiJjb29vbmcifQ.zXxkQjjOo70G4uGBgw9q1Vao3FWMacth-ugxCsyB7u4'
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
    return axios.get(`/collection/reports/pager`, {params})
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
