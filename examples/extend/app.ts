import axios from '../../src'

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })
//
// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })
//
// axios('/extend/post', {
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })
//
// console.log(axios)
//
// axios.get('/extend/get')
//
// axios.options('/extend/option')
//
// axios.delete('/extend/delete')
//
// axios.head('/extend/head')
//
// axios.post('/extend/post', { msg: 'post' })
//
// axios.put('/extend/put', { msg: 'post' })
//
// axios.patch('/extend/patch', { msg: 'patch' })

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user').then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.age)
  }
}



