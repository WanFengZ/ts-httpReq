import { isDate, isPlainObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    // 进行空值忽略
    if (val === null || typeof val === 'undefined') {
      return
    }

    let values = []
    if (Array.isArray(val)) {
      values = val
      // 处理值为数组类型的拼接key
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(val => {
      if (isDate(val)) {
        // 处理Date类型的值
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        // 处理Object类型的值
        val = JSON.stringify(val)
      }
      // 拼接键值对并支持特殊字符
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  const serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      // 处理url中的哈希部分
      url = url.slice(0, markIndex)
    }
    // 保留url中原有的参数
    url += (url.indexOf('?') !== -1 ? '&' : '?') + serializedParams
  }

  return url
}
