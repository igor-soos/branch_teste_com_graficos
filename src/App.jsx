import { Outlet } from "react-router-dom"
import Side from './components/Nav/Side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Side/>
      <Outlet/>
    </>
  )
}

export default App
