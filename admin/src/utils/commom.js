export const routeComponent = () => {
  const files = require.context('../pages/', true, /\.tsx$/)
  const components = []
  files.keys().forEach((key) => {
    if (key.includes('./Admin/') || key.includes('./Main/') || key.includes('./Login/')) {
      return false
    }
    const pathArr = key.split('/')
    const index = pathArr.findIndex((item) => item.includes('index'))
    if (pathArr[index].includes('index')) {
      const path = `/${pathArr[index - 1].toLowerCase()}`
      // 获取到真正的组件
      const component = files(key).default
      // 构建父级菜单路径
      let parentPath = []
      // 表明有父级至少一个父级菜单
      if (pathArr.length > 3) {
        for (let i = 1; i < pathArr.length - 2; i++) {
          parentPath = parentPath.concat(`/${pathArr[i].toLowerCase()}`)
        }
      }
      components.push({ path, component, parentPath })
    }
  })
  return components
}
