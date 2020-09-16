export const routeComponent = () => {
  const files = require.context('../pages/', true, /\.tsx$/)
  const components = []
  files.keys().forEach((key) => {
    if (key.includes('./Admin/') || key.includes('./Main/') || key.includes('./Login/')) {
      return false
    }
    // const resObj = {}
    const pathArr = key.split('/')
    if (pathArr[2].includes('index')) {
      const path = `/${pathArr[1].toLowerCase()}`
      const component = files(key).default
      components.push({ path, component })
    }
  })
  return components
}
