export type Method =
  | 'get'
  | 'Get'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
