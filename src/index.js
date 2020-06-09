import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

function formatUser(user) {
  return user.name + ' is ' + user.age
}
const user = { name: 'hah', age: 12 }
//creatElement 预先执行一些检查
const elementObj = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
)
// eslint-disable-next-line
// function tick() {
const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)
//组件名称必须以大写字母开头，react默认小写开头为原生标签元素
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} is {props.age}
    </h1>
  )
}
const defineElement = <Welcome name="test" age="18"></Welcome> //作为props传入
//每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 <Clock />
class Clock extends React.Component {
  
  //添加构造函数,将props值传到父类得构造函数
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }  
  //挂载时调用的函数
  componentDidMount() {
    this.timer=setInterval(()=>this.tick(),1000)
  }
  //卸载时调用的函数
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick=()=> {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* 将props替换成state */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <h1>hello world!</h1>,
  // defineElement,
  <Clock />,
  document.getElementById('root')
)
// }
// setInterval(tick, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
