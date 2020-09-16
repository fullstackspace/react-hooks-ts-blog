export const routeComponent = () => {
  const files = require.context('../pages/', true, /\.tsx$/)
  const components = []
  // console.log(files.keys())
  files.keys().forEach((key) => {
    if (key.includes('./Admin/') || key.includes('./Main/') || key.includes('./Login/')) {
      return false
    }
    // const resObj = {}
    const pathArr = key.split('/')
    console.log(pathArr)
    // console.log(pathArr)
    const index = pathArr.findIndex((item) => item.includes('index'))
    // console
    if (pathArr[index].includes('index')) {
      const path = `/${pathArr[index - 1].toLowerCase()}`
      const component = files(key).default
      let parentPath = []
      if (pathArr.length > 3) {
        for (let i = 1; i < pathArr.length - 2; i++) {
          parentPath = parentPath.concat(pathArr[i])
        }
        parentPath = `/${parentPath.join('/')}`
      }
      components.push({ path, component, parentPath })
    }
  })
  console.log(components)
  return components
}
