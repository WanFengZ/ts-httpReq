import axios from '../../src'
import qs from 'qs'

axios.defaults.headers.common['test2'] = 123

axios('/config/post', {
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '321'
  }
}).then((res) => {
  console.log(res.data)
})

const instance = axios.create({
  transformRequest: [
    (function(data) {
      return qs.stringify(data)
    }),
    ...(axios.defaults.transformRequest)
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse), function(data) {
      if (typeof data === 'object') {
        data.b = 2
      }
      return data
    }
  ]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then((res) => {
  console.log(res.data)
})

