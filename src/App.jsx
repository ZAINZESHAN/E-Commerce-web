import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import Home from './Pages/Home'
import Haider from './components/Haider'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import { AuthProvider } from './Contexts/AuthContext'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Haider />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
