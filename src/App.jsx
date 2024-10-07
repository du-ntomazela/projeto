
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./componentes/header"
import Footer from "./componentes/footer"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
