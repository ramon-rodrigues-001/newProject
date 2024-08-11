import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage"
import FormularioAssinatura from "./pages/formularioAssinatura/FormularioAssinatura"

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            < HomePage />
          }/>
          <Route path='/formulario-assinatura/' element={
            < FormularioAssinatura />
          }/>
        </Routes>
      </BrowserRouter>
    )
}

export default App
