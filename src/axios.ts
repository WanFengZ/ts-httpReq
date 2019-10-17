import { extend } from './tools/utils'
import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import defaults from './core/default'

function createAxiosInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createAxiosInstance(defaults)

export default axios
