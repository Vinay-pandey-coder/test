import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"

let root = ReactDOM.createRoot(document.getElementById("root"))

let Fn = () =>{
  return <App/>
}

root.render(<Fn/>)