import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Exemplo1 from './Paginas/Exemplo1.jsx'
import Exemplo2 from './Paginas/Exemplo2.jsx'
import Home from './routes/Home/Home.jsx'

const router = createBrowserRouter([{

  children:[
    {path:'/', element: <Home/>},
    {path:'/Error', element: <Error/>},
    {path:'/Exemplo1', element: <Exemplo1/>},
    {path:'/Exemplo2', element: <Exemplo2/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
