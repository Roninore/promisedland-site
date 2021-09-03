import { useCallback } from 'react'
export const useError = () => {
  return useCallback((text) => {
    if (window.M && text) {
      let msg = '<ul>'
      text.forEach((now) => {
        msg += `<li>${now}</li>`
      })
      msg += '</ul>'
      window.M.toast({ html: msg })
    }
  }, [])
}
