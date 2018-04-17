import * as Magix from "./lib/magix"
import tt from 'src/test.js'

Magix.addView('src/views/default',require('src/views/default'))

Magix.config({
  rootId: 'J_wrap', // 容器id
  defaultView: 'src/views/default',
  defaultPath:'/home',
  routes:{
    '/home':'src/views/default'
  }
})
// 开始初始化
Magix.boot()

// class HelloMessage extends Magix.View {
//   render() {
//     return a
//   }
// }

// ReactDOM.render(
//   <HelloMessage />,
//   mountNode
// )