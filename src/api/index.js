import axios from 'axios'
import queryString from 'querystring'
window.axios = axios
window.queryString = queryString

let api = {
  getMonthAndName: 'api/statistics/monthAndName'
}

const getMonthAndName = () => {
  return axios.get(
    api.getMonthAndName
  )
}

export {
  getMonthAndName
}

axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response)
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
