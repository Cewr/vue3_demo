export const getUrlParam = (name, path) => {
  const u = path || window.location.search,
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
  const val = r != null ? r[2] : ''

  if (!val && !path && location.hash) return getUrlParam(name, location.hash)
  return r != null ? r[2] : ''
}

export const getTopLevelDomain = (all = '') => {
  let url = window.location.href
  // if (import.meta.env.MODE === 'development') {}
  url = url.replace('www.', '')
  let hostname = new URL(url).hostname
  let parts = hostname.split('.')
  if (parts.length > 2 && all !== 'all') {
    return parts.slice(-2).join('.')
  } else {
    return hostname
  }
}

export const capitalizeFirstLetter = (str = '') => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
export const toQuery = (obj) => {
  if (Object(obj) !== obj) return ''
  return Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')
}
// ----------------------------------------------------------------

export const bodyScroll = {
  cssK: 'van-overflow-hidden',
  hide() {
    document.body.classList.add(bodyScroll.cssK)
  },
  recovery() {
    document.body.classList.remove(bodyScroll.cssK)
  },
}
